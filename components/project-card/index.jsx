"use client";

import Image from "next/image";
import CustomLink from "../customLink";
import { motion } from "framer-motion";
const ProjectCard = ({
  image,
  title,
  description,
  link = "",
  linkText = "",
  icon,
  view = "",
}) => {
  return (
    <div className="card laptop:w-80 phone:w-80  bg-base-100 shadow-lg hover:shadow-cyan-400  duration-500 overflow-hidden">
      <motion.figure
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={image}
          width={400}
          height={400}
          alt="project-image"
          draggable={false}
        />
      </motion.figure>
      <div className="card-body">
        <h2 className="card-title phone:text-base laptop:text-lg">{title}</h2>
        <p className="phone:text-sm laptop:text-base">{description}</p>
        {view ? (
          <CustomLink
            link={view}
            icon="arrow"
            target="blank"
            text="View Project"
          />
        ) : null}
        {link ? (
          <CustomLink link={link} text={linkText} icon={icon} target="blank" />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
