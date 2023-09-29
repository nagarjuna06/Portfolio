"use client";
import Image from "next/image";
import CustomLink from "../customLink";
import { profileData } from "@/utils";

const Intro = () => {
  return (
    <div className="flex laptop:justify-around p-5 laptop:items-center laptop:flex-row phone:flex-col-reverse gap-4 intro">
      <div className="mb-10">
        <div className="laptop:text-3xl phone:text-sm uppercase flex items-center justify-start font-bold gap-5 phone:mb-3 laptop:mb-5 ">
          <p>Hello 👋 I &apos; m</p>
          <section className="text-white h-10 overflow-hidden">
            <div className="bg-[#20a7d8] p-1 text-center laptop:mb-5 phone:mb-10 animate-[scrolling_8s_infinite]">
              {profileData.name}
            </div>
            <div className="bg-[#CD921E] p-1 text-center laptop:mb-5 phone:mb-10">
              Full Stack Developer
            </div>
            <div className="bg-[#c10528] p-1 text-center laptop:mb-5 phone:mb-10">
              Python Programmer
            </div>
          </section>
        </div>
        <p className="font-mono  animate-pulse laptop:text-lg phone:text-sm max-w-prose">
          A passionate Full stack developer 🚀 having an experience of building
          Web applications with JavaScript /Reactjs/Nodejs and some other cool
          libraries and frameworks.As a Full-Stack Developer I enjoy programming
          on my own projects.
        </p>
        <div className="flex gap-20 mt-10 phone:text-sm phone:gap-10">
          <CustomLink link="/about" text="About me" icon="arrow" />
          <CustomLink link="/contact" text="Contact" icon="arrow" />
        </div>
      </div>
      <Image
        src="/image.svg"
        width={550}
        height={550}
        alt="developer"
        draggable={false}
      />
    </div>
  );
};

export default Intro;
