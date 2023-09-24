import React from "react";
import Image from "next/image"
interface IIconButton {
	icon: React.JSX.Element;
	onClickHandler: Function;
	classNames?: string;
}
const IconButton = ({icon, onClickHandler, classNames = ""}: IIconButton): React.JSX.Element => {
	return <button className={`flex justify-center items-center ${classNames}`} onClick={() => onClickHandler()}>
			{icon}
		</button>
}

export default IconButton