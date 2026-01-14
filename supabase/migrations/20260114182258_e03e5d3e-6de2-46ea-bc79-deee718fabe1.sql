-- Add SELECT policy to restrict read access to admins only
CREATE POLICY "Only admins can read submissions" 
ON contact_submissions 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));