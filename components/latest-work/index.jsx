"use client";
import { latestWorkList, profileData } from "@/utils";
import React from "react";
import ProjectCard from "../project-card";
import CustomLink from "../customLink";
import { BiLogoGithub } from "react-icons/bi";
import { motion } from "framer-motion";
const LatestWork = () => {
  const textVariants = {
    initial: {
      x: 50,
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
    <div className="flex phone:flex-col-reverse phone:m-5 laptop:flex-row laptop:m-20  gap-10 ">
      <div className="flex gap-10 justify-center laptop:flex-row flex-wrap">
        {latestWorkList.map((each, index) => (
          <ProjectCard key={index} {...each} />
        ))}
      </div>

      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="w-60 flex flex-col gap-y-3"
      >
        <motion.h1
          variants={textVariants}
          className="laptop:text-xl phone:text-lg font-bold"
        >
          Latest Work
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="laptop:text-base phone:text-sm"
        >
          These are the latest projects that I&apos;ve worked on. It includes
          personal work and internship.
        </motion.p>

        <motion.div variants={textVariants}>
          <CustomLink link="/work" text="All Work" icon="arrow" />
        </motion.div>
        <motion.div variants={textVariants}>
          <CustomLink
            link={profileData.github.link}
            text="Follow on Github"
            icon={BiLogoGithub}
            move={false}
            target="blank"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LatestWork;
