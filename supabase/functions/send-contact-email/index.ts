import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role for database access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get SMTP configuration from environment
    // Using SMTP_USER as both sender and recipient for simplicity
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = parseInt(Deno.env.get('SMTP_PORT') || '587');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPass = Deno.env.get('SMTP_PASS');

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("Missing SMTP configuration");
      // Still save to database even if SMTP is not configured
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name,
          email,
          company: company || null,
          message,
          email_sent: false,
        });
      
      if (dbError) {
        console.error("Database error:", dbError);
      }

      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Sending contact form email from ${email} to ${smtpUser}`);

    let emailSent = false;

    try {
      // Import SMTPClient from deno.land
      const { SMTPClient } = await import("https://deno.land/x/denomailer@1.6.0/mod.ts");

      const client = new SMTPClient({
        connection: {
          hostname: smtpHost,
          port: smtpPort,
          tls: true,
          auth: {
            username: smtpUser,
            password: smtpPass,
          },
        },
      });

      // Format the email content
      const companyLine = company ? `Company: ${company}\n` : '';
      const emailBody = `New contact form submission from C7AI Solutions website:

Name: ${name}
Email: ${email}
${companyLine}
Message:
${message}

---
This email was sent from the C7AI Solutions contact form.`;

      const htmlBody = `
<h2>New Contact Form Submission</h2>
<p>You have received a new message from the C7AI Solutions website contact form:</p>

<table style="border-collapse: collapse; margin: 20px 0;">
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
    <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
    <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
  </tr>
  ${company ? `
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
    <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
  </tr>
  ` : ''}
</table>

<h3>Message:</h3>
<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>

<hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
<p style="color: #888; font-size: 12px;">This email was sent from the C7AI Solutions contact form.</p>
`;

      await client.send({
        from: smtpUser,
        to: smtpUser,
        subject: `New Contact Form: ${name}`,
        content: emailBody,
        html: htmlBody,
        replyTo: email,
      });

      await client.close();
      emailSent = true;
      console.log("Email sent successfully");
    } catch (emailError) {
      const errorMessage = emailError instanceof Error ? emailError.message : 'Unknown error';
      console.error("Email sending failed:", errorMessage);
      // Continue to save to database even if email fails
    }

    // Save submission to database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        company: company || null,
        message,
        email_sent: emailSent,
        sent_to_email: smtpUser,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      // Don't fail the request if email was sent successfully
      if (!emailSent) {
        return new Response(
          JSON.stringify({ error: "Failed to save submission" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } else {
      console.log("Submission saved to database");
    }

    if (!emailSent) {
      return new Response(
        JSON.stringify({ error: "Failed to send email, but submission saved" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent and submission saved successfully" }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error processing submission:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Failed to process submission", details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
