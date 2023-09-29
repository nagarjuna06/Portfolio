import { latestWorkList, profileData } from "@/utils";
import React from "react";
import ProjectCard from "../project-card";
import CustomLink from "../customLink";
import { BiLogoGithub } from "react-icons/bi";

const LatestWork = () => {
  return (
    <div className="flex phone:flex-col-reverse phone:m-5 laptop:flex-row laptop:m-20  gap-10 ">
      <div className="flex gap-10 justify-center laptop:flex-row flex-wrap">
        {latestWorkList.map((each, index) => (
          <ProjectCard key={index} {...each} />
        ))}
      </div>
      <div className="w-60 flex flex-col gap-y-3">
        <h1 className="laptop:text-xl phone:text-lg font-bold">Latest Work</h1>
        <p className="laptop:text-base phone:text-sm">
          These are the latest projects that I&apos;ve worked on. It includes
          personal work and internship.
        </p>

        <CustomLink link="/work" text="All Work" icon="arrow" />
        <CustomLink
          link={profileData.github.link}
          text="Follow on Github"
          icon={BiLogoGithub}
          move={false}
          target="blank"
        />
      </div>
    </div>
  );
};

export default LatestWork;
