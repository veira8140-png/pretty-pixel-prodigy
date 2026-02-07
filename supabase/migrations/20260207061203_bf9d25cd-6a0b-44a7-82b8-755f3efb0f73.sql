-- Fix 1: Restrict profiles table to authenticated users only
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

CREATE POLICY "Profiles are viewable by authenticated users"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Fix 2: Restrict events table to authenticated users for full details
-- Keep a public policy that hides creator info using a CASE expression isn't possible in RLS
-- So we restrict to authenticated users only
DROP POLICY IF EXISTS "Events are viewable by everyone" ON public.events;

CREATE POLICY "Events are viewable by authenticated users"
ON public.events
FOR SELECT
TO authenticated
USING (true);