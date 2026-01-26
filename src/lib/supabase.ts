import { createClient } from "@supabase/supabase-js";

// Read credentials from environment variables
// These are defined in .env file (which is NOT uploaded to GitHub)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export the Supabase client
// This client is used throughout your app to interact with the database
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
