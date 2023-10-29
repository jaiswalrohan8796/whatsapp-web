import React from "react";

interface props {
  message: any;
}

const Message = ({ message }: props) => {
  return (
    <div
      className={`w-full flex items-center ${
        message.self ? "justify-end" : "justify-start"
      } `}
    >
      <div
        className={
          "flex flex-col items-center rounded-md p-2 bg-message  max-w-[400px]"
        }
      >
        <div className={"w-full text-white"}>{message.body}</div>
        <div className={"w-full text-end text-xs text-gray-300"}>
          <span>{message.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
