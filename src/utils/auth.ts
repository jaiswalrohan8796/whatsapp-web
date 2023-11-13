import { supabase } from "./supabase";

const JWT_SECRET: string = process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET || "";

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });
}

export async function signOut() {
  const signOut = await supabase.auth.signOut();
}
