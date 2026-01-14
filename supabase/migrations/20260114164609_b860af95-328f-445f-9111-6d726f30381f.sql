-- Allow anonymous users to submit contact forms
CREATE POLICY "Allow public contact submissions" 
ON contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);