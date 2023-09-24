import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IAvatar {
	classNames?:string,
	height?: number,
	width?: number
}

const Avatar:React.FC = ({classNames = "", height = 44, width = 44}) => {
	return <div><Image className={`text-mainLight cursor-pointer ${classNames}`} src={"/icons/avatar.svg"} height={height} width={width} alt={"Avatar"} onClick={() => {}} />
	</div>
}

export default Avatar;

