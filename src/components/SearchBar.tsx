import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import IconButton from "@/components/shared/iconButton";
import Input from "@/components/shared/Input";
const SearchBar = () : React.JSX.Element => {
	return <div className={"h-full w-full bg-main rounded-md px-2 flex flex-row"}>
		<IconButton classNames={"h-9 w-9 rounded-full active:bg-mainLightHover justify-start"} icon={<MagnifyingGlassIcon className={"h-4 w-4 text-mainLight"} />} onClickHandler={() => {}} />
		<Input classNames={" text-sm h-full bg-transparent text-slate-200 focus:outline-none w-[90%]"} placeholder={"Search or start new chat"} />
	</div>
}


export default SearchBar