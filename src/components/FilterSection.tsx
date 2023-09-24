import React from "react";
import iconButton from "@/components/shared/iconButton";
import IconButton from "@/components/shared/iconButton";
import {AdjustmentsHorizontalIcon} from "@heroicons/react/24/solid";
import SearchBar from "@/components/SearchBar";
const FilterSection = () :React.JSX.Element => {
	return <div className={"w-full h-[50px] flex flex-row items-center justify-around bg-mainDark"}>
		<div className={"w-[90%] h-[40px] justify-center p-0.5 pl-3"}>
			<SearchBar />
		</div>
		<IconButton classNames={"h-9 w-9 rounded-full active:bg-mainLightHover"} icon={<AdjustmentsHorizontalIcon className={"h-6 w-6 text-mainLight"}  onClickHandler={() => {}} />} />
	</div>
}

export default FilterSection;