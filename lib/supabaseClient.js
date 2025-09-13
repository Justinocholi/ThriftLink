// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Use environment variables for security
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gfisuiramdnmhtnkkcfw.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXN1aXJhbWRubWh0bmtrY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjA4MDAsImV4cCI6MjAzMTE5NjgwMH0.Nh0fPXLQnbGaGnEFSs9-oJ9QNt-YlvIvN4l9YVYtBGw";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper functions for database operations
export async function getUser(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getVendors(limit = 10) {
  const { data, error } = await supabase
    .from('vendors')
    .select('*, categories(*)')
    .limit(limit);
  
  if (error) throw error;
  return data;
}

export async function getVendorById(vendorId) {
  const { data, error } = await supabase
    .from('vendors')
    .select('*, users(*), categories(*)')
    .eq('id', vendorId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getProductsByVendor(vendorId) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('vendor_id', vendorId);
  
  if (error) throw error;
  return data;
}
