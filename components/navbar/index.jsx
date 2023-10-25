"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import Menu from "../menu";
import { navList } from "@/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    const localTheme =
      localStorage.getItem("next_theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localTheme) {
      setTheme(false);
    }
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("next_theme", theme ? "light" : "dark");
  }, [theme]);
  return (
    <>
      <nav className="laptop:p-4 phone:p-2 tablet:p-3 laptop:shadow-lg phone:shadow-md flex laptop:justify-around items-center phone:justify-between sticky top-0 z-10">
        <Link href="/">
          <Image
            src={theme ? "/logo-light.png" : "/logo-dark.png"}
            alt="logo"
            width={180}
            height={50}
            className="mb-3 phone:w-20 tablet:w-24 laptop:w-28 animate-bounce"
            draggable={false}
          />
        </Link>
        <div className="font-medium text-gray-400 laptop:flex tablet:flex phone:hidden gap-x-16">
          {navList.map((each) => (
            <Link
              key={each.name}
              href={each.route}
              className={`${
                pathname === each.route ? "text-blue-400" : ""
              } hover:text-blue-400`}
            >
              {each.name}
            </Link>
          ))}
          <div onClick={changeTheme} className="hover:cursor-pointer">
            {theme ? (
              <BiMoon className=" w-6 h-6 text-black  active:rotate-90 duration-500" />
            ) : (
              <BiSun className=" w-6 h-6 text-yellow-400  active:-rotate-90 duration-500" />
            )}
          </div>
        </div>
        <Menu theme={theme} setTheme={changeTheme} pathname={pathname} />
      </nav>
    </>
  );
};

export default Navbar;
