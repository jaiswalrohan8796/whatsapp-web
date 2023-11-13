import IconButton from "@/components/shared/iconButton";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

import ProfileToolbar from "@/components/ProfileToolbar";
import MessageScreen from "@/components/MessageScreen";
import InputBar from "@/components/InputBar";
import { IPeople } from "@/utils/globalConstants";

interface props {
  peopleData: IPeople[];
  currUser: number;
}

const ChatScreen = ({ currUser, peopleData }: props) => {
  // const [people, setPeople] = useState({})

  const currUserData = peopleData.filter((people) => people.id == currUser)[0];

  const textContentRender = (
    header = currUserData.name,
    footer = "click here for contact info",
  ) => {
    return (
      <div className={"flex flex-col justify-center"}>
        <p className={"text-white text-md"}>{header}</p>
        <p className={"text-xs text-gray-400"}>{footer}</p>
      </div>
    );
  };

  return (
    <div
      className={
        "h-full w-[70%] flex flex-col items-center justify-between bg-mainDark"
      }
    >
      <ProfileToolbar classNames={"px-4"} avatar={""} />
      <MessageScreen />
      <InputBar />
    </div>
  );
};

export default ChatScreen;
