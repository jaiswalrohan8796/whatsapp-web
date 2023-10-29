import React, { useEffect, useRef, useState } from "react";
import Message from "@/components/shared/message";
import message from "@/components/shared/message";

interface IMessage {
  body: string;
  timestamp: string;
  self: boolean;
}

const MessageScreen = (): React.JSX.Element => {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      body:
        "Lorem ipsum dolor sit amet. Ex velit reprehenderit eum odio modi ut\n" +
        "        consequatur mollitia qui explicabo cupiditate. Qui earum repellat ex\n" +
        "        internos illo a beatae dolorem quo vitae veniam vel beatae nemo aut\n" +
        "        voluptate cumque aut tempora quas. Est quos fugiat aut eaque odio sit\n" +
        "        internos amet sed repudiandae blanditiis ut rerum cupiditate et\n" +
        "        consequatur repellat qui beatae deserunt.",
      timestamp: "6:32pm",
      self: true,
    },
  ]);

  const selfDummyMessage: IMessage = {
    body:
      "Lorem ipsum dolor sit amet. Ex velit reprehenderit eum odio modi ut\n" +
      "        consequatur mollitia qui explicabo cupiditate. Qui earum repellat ex\n" +
      "        internos illo a beatae dolorem quo vitae veniam vel beatae nemo aut\n" +
      "        voluptate cumque aut tempora quas. Est quos fugiat aut eaque odio sit\n" +
      "        internos amet sed repudiandae blanditiis ut rerum cupiditate et\n" +
      "        consequatur repellat qui beatae deserunt.",
    timestamp: "6:32pm",
    self: true,
  };

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    // @ts-ignore
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  // useEffect(() => {
  //   // 👇️ simulate chat messages flowing in
  //   setInterval(() => {
  //     console.log(messages);
  //     setMessages((curr) => [...curr, selfDummyMessage]);
  //   }, 1000);
  // }, []);

  return (
    <div
      className={`w-full h-[calc(100%_-_124px)] bg-messageScreen bg-contain flex flex-col gap-2 p-4 overflow-y-scroll`}
    >
      {messages.map((mess: IMessage, idx: number) => {
        return <Message key={idx} message={mess} />;
      })}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageScreen;
