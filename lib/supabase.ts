import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://klrikfzixuzidskulbzd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscmlrZnppeHV6aWRza3VsYnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwODUzMTIsImV4cCI6MjA4MjY2MTMxMn0.aLw4m28u58aCWye8l-i_jUqs2dvdsSjNwLKt4lgwX3M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);