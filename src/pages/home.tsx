import Head from "next/head";
import ChatMenu from "@/components/ChatMenu";
import ChatScreen from "@/components/ChatScreen";
import { useEffect, useState } from "react";
import { IPeople } from "@/utils/globalConstants";
import { NextRouter, useRouter } from "next/router";
import ChatScreenPlaceHolder from "@/components/ChatScreenPlaceHolder";
import { verifyJWT } from "@/utils/auth";
export default function Home() {
  const router: NextRouter = useRouter();
  const peopleData: IPeople[] = [
    {
      id: 1,
      name: "Aarav Rathore",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 2,
      name: "Ishan Rangarajan",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 3,
      name: "Dhruv Saxena",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 4,
      name: "Vihaan Venkatesan",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 5,
      name: "Vishal Mehta",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 6,
      name: "Shreyas Jaiteley",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 7,
      name: "Rakesh Gavde",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 8,
      name: "Trishla Rodrigues",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 9,
      name: "Aanya Das",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 10,
      name: "Saanvi Gupta",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 11,
      name: "Rishika Chopra",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 12,
      name: "Navya Jayaraman",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 13,
      name: "Pari Kapoor",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 14,
      name: "Saanvi Lobo",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
    {
      id: 15,
      name: "Vihaan Chatterjee",
      profileURL: "",
      lastMessage: {
        text: "hello dummy text of long",
        timestamp: new Date(),
        status: "seen",
      },
      unreadMessage: 1,
    },
  ];
  const [people, setPeople] = useState(peopleData);
  const [chatScreenUser, setChatScreenUser] = useState(null);

  useEffect(() => {
    const id = router.query.id ?? null;
    if (id != "") {
      // @ts-ignore
      setChatScreenUser(Number(id));
    }
  }, [router.query]);

  return (
    <div className={"w-screen h-screen flex flex-row gap-0 overflow-hidden"}>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <ChatMenu peopleData={people} />
      {chatScreenUser ? (
        <ChatScreen currUser={chatScreenUser} peopleData={peopleData} />
      ) : (
        <ChatScreenPlaceHolder />
      )}
    </div>
  );
}

//access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImZGejZNU0hrTFJZOWszRGoiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk4NjAyNTg5LCJpYXQiOjE2OTg1OTg5ODksImlzcyI6Imh0dHBzOi8veHZmaGZjYXVzb295b2RwemlpcHguc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjNjMTNmODNhLTBjM2MtNDg5MC1hMTg3LTZlZWU1ZjU0YmZlMSIsImVtYWlsIjoiamFpc3dhbHJvaGFuODc5NkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pVbFFpT2g4UUtLUEYxRlNFQU1oSlR2bDZaRWFBYXZtZ2doY1BJNHUtZzd4dz1zOTYtYyIsImVtYWlsIjoiamFpc3dhbHJvaGFuODc5NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiUm9oYW4gSmFpc3dhbCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsIm5hbWUiOiJSb2hhbiBKYWlzd2FsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pVbFFpT2g4UUtLUEYxRlNFQU1oSlR2bDZaRWFBYXZtZ2doY1BJNHUtZzd4dz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTA4MjI1MTk0Mjg1Njg2NzE1NDc2Iiwic3ViIjoiMTA4MjI1MTk0Mjg1Njg2NzE1NDc2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE2OTg1OTg5ODl9XSwic2Vzc2lvbl9pZCI6ImU0ZDZjMWM1LWJiZWMtNDI2Yi1iMzQ4LTU4NjNlYjkxZDYxNyJ9.G2zw4A8wMtCRUz4xdS-yL3Ed69xt4HYondpyADDpQas
// &expires_at=1698602589&expires_in=3600&provider_token=ya29.a0AfB_byCkug61bI7brixv5ggRhF0iY96vqGBhsRwtPCLuvRW8rqkWO6DbStvwTNNDfB8QIbehqU8-Xxt2N5C0MTrA57rG1xybQQiCuxNPhY9L_oR3l_OQ-dC839Y3MwR3PfGxxai72UhHw0lWXeLTidTU0trblpgAWwaCgYKAVESARESFQGOcNnCLLyF0WAQ567Y50pCnf3_XQ0169
// &refresh_token=AW3LNiXCfpsXpMEH0QJGig
// &token_type=bearer
