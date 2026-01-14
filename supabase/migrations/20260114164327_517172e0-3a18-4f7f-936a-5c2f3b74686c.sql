-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;

-- Create a permissive policy that only allows authenticated users to view their own profile
CREATE POLICY "Users can view own profile" 
ON profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Add explicit deny for anonymous users (this ensures anon role cannot read profiles)
CREATE POLICY "Deny anonymous access" 
ON profiles 
FOR SELECT 
TO anon 
USING (false);