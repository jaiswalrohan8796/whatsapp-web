import React from "react";
interface IIconButton {
  label: string;
  icon: React.JSX.Element;
  onClickHandler: Function;
  classNames?: string;
}
const IconWithLabelButton = ({
  label,
  icon,
  onClickHandler,
  classNames = "",
}: IIconButton): React.JSX.Element => {
  return (
    <button
      className={`flex justify-center items-center ${classNames}`}
      onClick={() => onClickHandler()}
    >
      {icon}
      <span className={"ml-2 text-sm"}>{label}</span>
    </button>
  );
};

export default IconWithLabelButton;
