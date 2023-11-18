import React from "react";
import Image from "next/image";
import AvatarIcon from "@/components/shared/svg/Avatar";
interface IAvatar {
  src: string;
  classNames?: string;
  height?: number;
  width?: number;
}

const Avatar = ({
  src,
  classNames = "",
  height = 35,
  width = 55,
}: IAvatar): React.JSX.Element => {
  return (
    <div>
      {src ? (
        <Image
          className={`text-mainLight cursor-pointer h-[40px] w-[40px] rounded-full object-cover ${classNames}`}
          src={src}
          height={height}
          width={width}
          alt={"profile"}
        />
      ) : (
        <AvatarIcon />
      )}
    </div>
  );
};

export default Avatar;
