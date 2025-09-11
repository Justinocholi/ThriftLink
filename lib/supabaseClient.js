// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gfisuiramdnmhtnkkcfw.supabase.co";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY"; // use your real anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
