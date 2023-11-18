import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface props {
  children: any;
  visible: boolean;
  setVisible: Function;
  title: string;
  classNames?: string;
}
const Modal = ({
  children,
  visible = false,
  setVisible,
  title,
  classNames = "",
}: props) => {
  return (
    <>
      {visible && (
        <div
          className={`absolute top-[25vh] left-[25vw] w-[50vw] rounded-xl border border-mainInput shadow-md shadow-zinc-900 bg-mainDark text-white z-10 ${classNames}`}
        >
          <div
            className={
              "h-[60x] flex items-center justify-between bg-main rounded-t-xl p-4  border-b border-b-mainInput"
            }
          >
            <p className={"text-md font-bold"}>{title}</p>
            <div
              className={
                "h-8 w-8 rounded-full flex items-center justify-center hover:bg-mainLightHover cursor-pointer"
              }
            >
              <XMarkIcon
                className={"h-6 w-6"}
                onClick={() => setVisible(!visible)}
              />
            </div>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
