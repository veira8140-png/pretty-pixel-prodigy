-- Add RLS policies for event-images storage bucket
-- Enable authenticated users to upload images
CREATE POLICY "Authenticated users can upload event images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'event-images');

-- Allow public read access for event images (events are publicly viewable)
CREATE POLICY "Public can view event images"
ON storage.objects FOR SELECT
USING (bucket_id = 'event-images');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Users can update their own event images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'event-images' AND (storage.foldername(name))[1] = auth.uid()::text)
WITH CHECK (bucket_id = 'event-images' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow authenticated users to delete their own uploads
CREATE POLICY "Users can delete their own event images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'event-images' AND (storage.foldername(name))[1] = auth.uid()::text);