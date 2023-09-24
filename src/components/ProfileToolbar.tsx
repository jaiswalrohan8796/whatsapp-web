import React from "react";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/shared/iconButton";
import {EllipsisVerticalIcon, FolderPlusIcon, UserGroupIcon, MegaphoneIcon, SwatchIcon} from "@heroicons/react/24/solid";

import Image from "next/image"

interface IProfileToolbar {
	avatar: any;
	textContentRender: Function;
	actionsButtons: any[]
	classNames?:string,
}

const ProfileToolbar = ({avatar, textContentRender, actionsButtons, classNames= ""}: IProfileToolbar ): React.JSX.Element => {
	return <div className={`w-full h-[60px] p-2 bg-main flex flex-row justify-between items-center ${classNames}`}>
		<div className={"flex flex-row items-center justify-start gap-2"}>
			<Avatar />
			{textContentRender()}
		</div>
		<div className={"flex flex-row justify-between items-center gap-4"}>
			{actionsButtons.map((actionFunc, idx) => {
				return actionFunc(idx)
			})}
		</div>
		</div>
}


export default ProfileToolbar;


