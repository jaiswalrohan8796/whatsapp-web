import React from "react";
import Image from "next/image";
interface IAvatar {
	classNames?:string,
	height?: number,
	width?: number
}

const Avatar = ({classNames = "", height = 44, width = 44}: IAvatar) : React.JSX.Element => {
	return <div><Image className={`text-mainLight cursor-pointer ${classNames}`} src={"/icons/avatar.svg"} height={height} width={width} alt={"Avatar"} onClick={() => {}} />
	</div>
}

export default Avatar;

