import React from "react";
import IconButton from "@/components/shared/iconButton";
import Input from "@/components/shared/Input";
import {PlusSmallIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import {FaceSmileIcon} from "@heroicons/react/24/outline";

const InputBar = () : React.JSX.Element => {
	return <div className={`w-full h-[64px] bg-main flex flex-row items-center justify-between p-2 px-4`}>
		<div className={`flex flex-row justify-start items-center gap-2`}>
			<IconButton  classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<FaceSmileIcon className={"h-7 w-7 text-mainLight"} />} onClickHandler={() => {}} />
			<IconButton  classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<PlusSmallIcon className={"h-8 w-8 text-mainLight"} />} onClickHandler={() => {}} />
		</div>
		<Input classNames={`text-md h-full w-full rounded-md mx-2 pl-4 bg-mainInput text-slate-200 focus:outline-none`} placeholder={"Type a message"} />
		<IconButton  classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<MicrophoneIcon className={"h-6 w-6 text-mainLight"} />}  onClickHandler={() => {}} />
	</div>
}

export default InputBar