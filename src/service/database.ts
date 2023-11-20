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

export const addToContacts = async (
  user_id: string | undefined,
  contact_id: string,
) => {
  return supabase
    .from("user_contact")
    .update({ contact_id: JSON.stringify([]) })
    .eq("user_id", user_id);
};

export const getContacts = async (user_id: string | undefined) => {
  console.log(user_id);
  return supabase.from("user_contact").select().eq("user_id", user_id);
};
