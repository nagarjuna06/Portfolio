"use client";

import { profileData } from "@/utils";

const Footer = () => {
  const d = new Date().getFullYear();
  return (
    <footer className="text-center text-gray-500 laptop:text-base phone:text-sm m-10">
      Copyright &copy; {d} • {profileData.name}
    </footer>
  );
};

export default Footer;
