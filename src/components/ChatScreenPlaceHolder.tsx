import { FolderPlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const ChatScreenPlaceHolder = () => {
  return (
    <div
      className={
        "h-full w-[70%] flex flex-row items-center justify-center bg-mainDark text-white"
      }
    >
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <p className={"text-2xl"}>Whatsapp Web</p>
        <p className={"text-base flex gap-1 flex-nowrap"}>
          Click on the <FolderPlusIcon className={"h-6 w-6 text-mainLight"} />
          icon to add contacts
        </p>
      </div>
    </div>
  );
};

export default ChatScreenPlaceHolder;
