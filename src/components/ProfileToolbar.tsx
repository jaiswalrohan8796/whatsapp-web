import React from "react";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/shared/iconButton";
import {
  FolderPlusIcon,
  UserGroupIcon,
  MegaphoneIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import OptionDropdown from "@/components/shared/optionDropdown";
import { signOut } from "@/utils/auth";
import { useRouter } from "next/router";

interface IProfileToolbar {
  avatar: any;
  classNames?: string;
}

const ProfileToolbar = ({
  avatar,
  classNames = "",
}: IProfileToolbar): React.JSX.Element => {
  const router = useRouter();
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
  ];

  const optionsList = () => {
    return (
      <div
        className={
          "absolute top-[40px] right-0 w-[200px] bg-mainInput text-white shadow-md rounded-md"
        }
      >
        <div
          className={
            "flex items-center justify-between gap-2 w-full rounded-md h-[40px] cursor-pointer hover:bg-mainLightHover p-2 px-4"
          }
          onClick={async () => {
            await signOut();
            await router.push("/login");
          }}
        >
          <p>Logout</p>
        </div>
      </div>
    );
  };
  return (
    <div
      className={`w-full h-[60px] p-2 px-4 bg-main flex flex-row justify-between items-center ${classNames}`}
    >
      <div className={"flex flex-row items-center justify-start gap-2"}>
        <Avatar src={avatar} />
      </div>
      <div className={"flex flex-row justify-between items-center gap-4"}>
        {actionsButtons.map((actionFunc, idx) => {
          return actionFunc(idx);
        })}
        <OptionDropdown optionsList={optionsList} />
      </div>
    </div>
  );
};

export default ProfileToolbar;
