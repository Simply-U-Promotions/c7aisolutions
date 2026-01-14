-- Remove the overly permissive public INSERT policy
-- The edge function uses service role key which bypasses RLS,
-- so this policy is unnecessary and creates a security risk
DROP POLICY IF EXISTS "Allow public contact submissions" ON public.contact_submissions;