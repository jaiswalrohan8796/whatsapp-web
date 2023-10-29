import React from "react";
import People from "@/components/shared/People";

import {IPeople} from "@/utils/globalConstants";

interface props {
	peopleData: IPeople[],
	onPeopleClick:Function
}

const PeopleList = ({peopleData, onPeopleClick}:props): React.JSX.Element => {

	return <div className={` h-[calc(100%_-_110px)] overflow-y-scroll`} >
		{peopleData.length > 0 && peopleData.map((people, idx) => {
			return <People key={idx} data={people} onPeopleClick={onPeopleClick} />
		})}
	</div>
}

export default PeopleList