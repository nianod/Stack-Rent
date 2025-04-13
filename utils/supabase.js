import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://awovrjztjazkbsurzsoq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3b3Zyanp0amF6a2JzdXJ6c29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODkwMzgsImV4cCI6MjA2MDA2NTAzOH0.APhIBsCiR-Y6WdHy7tcTZyadVunBlXOyp3N5ZKmOLFk"

export const supabase = createClient(supabaseUrl, supabaseKey);