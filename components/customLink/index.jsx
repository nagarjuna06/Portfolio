import Link from "next/link";
import React from "react";
import { BiLink } from "react-icons/bi";
import { TiArrowRightThick } from "react-icons/ti";

const CustomLink = ({ link, text, icon, target, move = true }) => {
  let Icon;
  switch (icon) {
    case "arrow":
      Icon = TiArrowRightThick;
      break;
    case "link":
      Icon = BiLink;
      break;
    default:
      Icon = icon;
  }
  const targetWindow = target === "blank" ? "_blank" : "_self";
  return (
    <Link
      href={link}
      target={targetWindow}
      className="flex items-center gap-3 hover:text-blue-400 font-medium text-gray-500 group laptop:text-base phone:text-sm"
    >
      {move ? (
        <Icon
          className={
            "laptop:text-2xl phone:text-xl group-hover:translate-x-2 duration-300"
          }
        />
      ) : (
        <Icon
          className={
            "laptop:text-2xl phone:text-xl group-hover:scale-125 duration-300"
          }
        />
      )}

      <p>{text}</p>
    </Link>
  );
};

export default CustomLink;
