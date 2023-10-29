import { supabase } from "./supabase";

// @ts-ignore
import jwt from "jsonwebtoken";

const JWT_SECRET: string = process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET || "";

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/home",
    },
  });
}

export async function signOut() {
  const signOut = await supabase.auth.signOut();
}

export const verifyJWT = (token: any) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};
