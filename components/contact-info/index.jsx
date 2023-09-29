"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactInfo = ({ Icon, title, subtitle, link = "" }) => {
  const router = useRouter();
  const [copy, setCopy] = useState(false);

  const onCopy = () => {
    if (link) {
      router.push(link);
      return;
    }
    setCopy(true);
    navigator.clipboard.writeText(title);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div
      className="card flex flex-row items-center gap-5 group p-2 cursor-pointer"
      onClick={onCopy}
    >
      <div className="laptop:text-2xl phone:text-lg text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-200  duration-500 p-2  rounded-full bg-gray-100">
        <Icon />
      </div>
      <div>
        <h2 className="phone:text-base laptop:text-lg font-medium">{title}</h2>
        {copy ? (
          <p className="text-blue-600 font-medium">Copied !</p>
        ) : (
          <p className="text-gray-500 phone:text-sm">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
