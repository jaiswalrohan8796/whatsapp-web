import React from "react";
import ProfileToolbar from "@/components/ProfileToolbar";
import FilterSection from "@/components/FilterSection";
import PeopleList from "@/components/PeopleList";
import { IPeople } from "@/utils/globalConstants";
import { NextRouter, useRouter } from "next/router";

interface props {
  peopleData: IPeople[];
  user: any;
}

const ChatMenu = ({ peopleData, user }: props) => {
  const router: NextRouter = useRouter();

  const onPeopleClick = async (peopleID: number) => {
    await router.push({
      pathname: router.pathname,
      query: {
        id: peopleID,
      },
    });
  };

  return (
    <div
      className={"w-[30%] h-full bg-mainDark border-r border-mainLightHover"}
    >
      <ProfileToolbar avatar={user?.picture} user={user} />
      <FilterSection />
      <PeopleList peopleData={peopleData} onPeopleClick={onPeopleClick} />
    </div>
  );
};

export default ChatMenu;
