import React, {useState} from "react";
import exp from "constants";

const Input = ({ classNames="", placeholder = ""}) : React.JSX.Element => {
	const [value, setValue] = useState("")
	return <input className={`${classNames}`} type={"text"} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}/>
}

export default Input