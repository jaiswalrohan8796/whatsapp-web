import React from "react";
import People from "@/components/shared/People";

import { IPeople } from "@/utils/globalConstants";

interface props {
  peopleData: IPeople[];
  onPeopleClick: Function;
}

const PeopleList = ({
  peopleData,
  onPeopleClick,
}: props): React.JSX.Element => {
  return (
    <div className={` h-[calc(100%_-_110px)] overflow-y-scroll`}>
      {peopleData.length > 0 &&
        peopleData.map((people, idx) => {
          return (
            <People key={idx} data={people} onPeopleClick={onPeopleClick} />
          );
        })}
      {peopleData?.length == 0 && (
        <div
          className={
            "text-gray-400 text-sm flex items-center justify-center w-full my-4"
          }
        >
          No contacts
        </div>
      )}
    </div>
  );
};

export default PeopleList;
