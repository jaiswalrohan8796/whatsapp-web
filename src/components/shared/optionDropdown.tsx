import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import IconButton from "@/components/shared/iconButton";
import React, { useState } from "react";

interface props {
  optionsList: any;
}

const OptionDropdown = ({ optionsList }: props) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className={"relative"}>
      <IconButton
        classNames={`h-9 w-9 rounded-full ${
          showOption ? "bg-mainLightHover" : ""
        } hover:bg-mainLightHover `}
        icon={<EllipsisVerticalIcon className={"h-6 w-6 text-mainLight"} />}
        onClickHandler={() => {
          setShowOption(!showOption);
        }}
      />
      {showOption && optionsList()}
    </div>
  );
};

export default OptionDropdown;
