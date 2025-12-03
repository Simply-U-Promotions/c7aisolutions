import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how AI can solve your unique challenges and unlock new opportunities for growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactFormDialog>
              <Button variant="hero" size="xl" className="group">
                <Mail className="w-5 h-5" />
                Contact Us Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ContactFormDialog>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Email:</span>{" "}
              <a href="mailto:info@c7aisolutions.com" className="text-primary hover:underline">
                info@c7aisolutions.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
