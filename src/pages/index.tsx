import Head from "next/head"
import ChatMenu from "@/components/ChatMenu"
import ChatScreen from "@/components/ChatScreen";
export default function Home() {
  return (
    <div className={"w-screen h-screen flex flex-row gap-0 overflow-hidden"}>
        <Head><title>Whatsapp</title>
        </Head>
      <ChatMenu />
        <ChatScreen />
    </div>
  )
}
