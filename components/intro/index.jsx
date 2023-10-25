"use client";
import Image from "next/image";
import CustomLink from "../customLink";
import { introLinks, profileData } from "@/utils";
import { motion } from "framer-motion";

const Intro = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="flex laptop:justify-around p-5 laptop:items-center laptop:flex-row phone:flex-col-reverse gap-4 intro">
      <motion.div variants={textVariants} initial="initial" animate="animate">
        <motion.div
          variants={textVariants}
          className="laptop:text-3xl phone:text-sm uppercase flex items-center justify-start font-bold gap-5 phone:mb-3 laptop:mb-5 "
        >
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
        </motion.div>
        <motion.p
          variants={textVariants}
          className="font-mono  animate-pulse laptop:text-lg phone:text-sm max-w-prose"
        >
          A passionate Full stack developer 🚀 having an experience of building
          Web applications with JavaScript /Reactjs/Nodejs and some other cool
          libraries and frameworks.As a Full-Stack Developer I enjoy programming
          on my own projects.
        </motion.p>
        <motion.div
          variants={textVariants}
          className="flex laptop:gap-20 mt-10 phone:text-sm phone:gap-x-10 phone:gap-y-5 flex-wrap"
        >
          {introLinks.map((each, index) => (
            <CustomLink
              key={index}
              link={each.link}
              text={each.text}
              icon={each.icon}
              target={each?.target}
            />
          ))}
        </motion.div>
      </motion.div>
      <Image
        src="/image.svg"
        width={600}
        height={600}
        alt="developer"
        draggable={false}
      />
    </div>
  );
};

export default Intro;
