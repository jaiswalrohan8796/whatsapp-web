import React from "react";
import ProfileToolbar from "@/components/ProfileToolbar";
import FilterSection from "@/components/FilterSection";
import PeopleList from "@/components/PeopleList";
import IconButton from "@/components/shared/iconButton";
import {
  EllipsisVerticalIcon,
  FolderPlusIcon,
  MegaphoneIcon,
  SwatchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { IPeople } from "@/utils/globalConstants";
import { NextRouter, useRouter } from "next/router";

interface props {
  peopleData: IPeople[];
}

const ChatMenu = ({ peopleData }: props) => {
  const router: NextRouter = useRouter();

  const actionsButtons = [
    (key: number) => (
      <IconButton
        key={key}
        classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"}
        icon={<UserGroupIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {}}
      />
    ),
    (key: number) => (
      <IconButton
        key={key}
        classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"}
        icon={<SwatchIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {}}
      />
    ),
    (key: number) => (
      <IconButton
        key={key}
        classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"}
        icon={<MegaphoneIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {}}
      />
    ),
    (key: number) => (
      <IconButton
        key={key}
        classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"}
        icon={<FolderPlusIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {}}
      />
    ),
    (key: number) => (
      <IconButton
        key={key}
        classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"}
        icon={<EllipsisVerticalIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {}}
      />
    ),
  ];

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
      <ProfileToolbar
        avatar={""}
        textContentRender={() => {}}
        actionsButtons={actionsButtons}
      />
      <FilterSection />
      <PeopleList peopleData={peopleData} onPeopleClick={onPeopleClick} />
    </div>
  );
};

export default ChatMenu;
