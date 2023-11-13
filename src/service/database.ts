import { supabase } from "@/utils/supabase";

export const checkUserExists = async (email: string) => {
  const res = await supabase.from("user").select().eq("email", email);
  return !(!res || res?.data?.length == 0);
};

export const createUser = async (user_data: any) => {
  const res = await supabase.from("user").insert(user_data);
  console.log("createUser res", res);
};

export const findUser = async (email: string) => {
  const res = await supabase.from("user").select().eq("email", email);
  // @ts-ignore
  return res?.data[0];
};
