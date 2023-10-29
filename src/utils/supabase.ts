import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASEURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASEKEY: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase: SupabaseClient = createClient(SUPABASEURL, SUPABASEKEY);
