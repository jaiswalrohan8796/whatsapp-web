import Head from "next/head";
import ChatMenu from "@/components/ChatMenu";
import ChatScreen from "@/components/ChatScreen";
import { useEffect, useState } from "react";
import { IPeople } from "@/utils/globalConstants";
import { NextRouter, useRouter } from "next/router";
import ChatScreenPlaceHolder from "@/components/ChatScreenPlaceHolder";
import { supabase } from "@/utils/supabase";
import { checkUserExists, createUser, findUser } from "@/service/database";
import { createUserParams } from "@/utils/utility";
export default function Index() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [people, setPeople] = useState([]);
  const [chatScreenUser, setChatScreenUser] = useState(null);

  const authenticateUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      await router.push("/login");
    } else {
      // @ts-ignore
      setUser(user);
      const isUser = await checkUserExists(user?.user_metadata?.email);
      if (!isUser) await createUser(createUserParams(user?.user_metadata));
      const supabaseUser = await findUser(user?.user_metadata?.email);
      setUser(supabaseUser);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <div className={"w-screen h-screen flex flex-row gap-0 overflow-hidden"}>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <ChatMenu peopleData={people} user={user} />
      {chatScreenUser ? (
        <ChatScreen currUser={chatScreenUser} peopleData={people} />
      ) : (
        <ChatScreenPlaceHolder />
      )}
    </div>
  );
}
