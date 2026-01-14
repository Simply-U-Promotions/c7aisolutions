-- Add column to track which email address received the form submission
ALTER TABLE public.contact_submissions 
ADD COLUMN sent_to_email TEXT;