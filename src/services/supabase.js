import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rowgrkgkfczqrdjbrwmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvd2dya2drZmN6cXJkamJyd21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzIzNTcsImV4cCI6MjA1MDQ0ODM1N30.bnfTscraTAfPGJAUT-Tbso9Guz6x15cVKkbHEhyYLLc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
