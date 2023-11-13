import React from "react";
import Avatar from "@/components/Avatar";
import { CheckIcon } from "@heroicons/react/24/outline";
import { IPeople } from "@/utils/globalConstants";
import Image from "next/image";

interface IPeopleJSX {
  data: IPeople;
  onPeopleClick: Function;
}

const People = ({ data, onPeopleClick }: IPeopleJSX): React.JSX.Element => {
  return (
    <div
      className={`h-[74px] w-full pl-1 bg-mainDark flex flex-row items-center hover:bg-main cursor-pointer`}
      onClick={() => onPeopleClick(data.id)}
    >
      <Avatar src={""} classNames={""} height={55} width={55} />
      <div
        className={
          "h-full w-full flex flex-col justify-center p-2 border-b border-main"
        }
      >
        <div className={"flex flex-row items-center justify-between"}>
          <p className={" text-white text-md"}>{data.name}</p>
          <p className={"text-xs text-gray-400"}>
            {data.lastMessage.timestamp.toDateString()}
          </p>
        </div>
        <div className={"flex flex-row items-center justify-start"}>
          {data.lastMessage.status == "seen" && (
            <CheckIcon className={"text-mainLight h-4 w-4 mr-1"} />
          )}
          <p className={"text-sm text-gray-400"}>{data.lastMessage.text}</p>
        </div>
      </div>
    </div>
  );
};

export default People;
