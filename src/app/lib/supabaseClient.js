import { createClient } from "@supabase/supabase-js";

// Supabase URL and Anon Key should be stored in environment variables for security
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create the new instance of the Supabse client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export the Supabase client for use in other part of the application

export default supabase;