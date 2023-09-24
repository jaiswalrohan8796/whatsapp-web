import IconButton from "@/components/shared/iconButton";
import {EllipsisVerticalIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";

import ProfileToolbar from "@/components/ProfileToolbar";
import MessageScreen from "@/components/MessageScreen";
import InputBar from "@/components/InputBar";


const ChatScreen : React.FC = () => {

	// const [people, setPeople] = useState({})

	const actionButtons = [
		(key) => <IconButton key={key} classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<MagnifyingGlassIcon className={"h-5 w-5 text-mainLight"}  onClickHandler={() => {}} />} />,
		(key) => <IconButton key={key} classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<EllipsisVerticalIcon className={"h-6 w-6 text-mainLight"}  onClickHandler={() => {}} />} />
	]

	// setPeople({name: "Rohan"})

	const textContentRender = (header = "Rohan", footer = "click here for contact info") => {
		return <div className={"flex flex-col justify-center"}>
			<p className={"text-white text-md"}>{header}</p>
			<p className={"text-xs text-gray-400"}>{footer}</p>
		</div>
	}

	return <div className={"h-full w-[70%] flex flex-col items-center justify-between bg-mainDark"}>
		<ProfileToolbar classNames={"px-4"} avatar={""} textContentRender={textContentRender} actionsButtons={actionButtons} />
		<MessageScreen />
		<InputBar />
	</div>
}

export default ChatScreen