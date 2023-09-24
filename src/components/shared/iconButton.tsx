import React from "react";
import Image from "next/image"
interface IIconButton {
	icon: React.FC;
	onClickHandler: Function;
	classNames?: ""
}
const IconButton: React.FC = ({icon, onClickHandle, classNames=""}: IIconButton) => {
	return <button className={`flex justify-center items-center ${classNames}`} onClick={onClickHandle}>
			{icon}
		</button>
}

export default IconButton