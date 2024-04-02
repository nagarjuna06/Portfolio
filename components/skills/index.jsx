"use client";
import { skillsList } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const textVariants = {
    initial: {
      x: -50,
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
    <div className="flex w-full phone:flex-col-reverse laptop:flex-row  p-3 justify-around laptop:mt-10 laptop:pl-20  gap-8">
      <div className="grid laptop:grid-cols-4 phone:grid-cols-2 tablet:grid-cols-3 w-full gap-10">
        {skillsList.map((each, index) => (
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            key={index}
            className="flex flex-col items-center gap-y-2 font-medium text-gray-600 "
          >
            <motion.div
              variants={textVariants}
              whileHover={{ rotate: 360 }}
              whileTap={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="bg-white p-3 rounded-full"
            >
              <Image
                src={each.image}
                width={50}
                height={50}
                alt="skill"
                className="skill-image"
                draggable={false}
              />
            </motion.div>
            <motion.p
              variants={textVariants}
              className="skill-name phone:text-sm"
            >
              {each.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <div className="card">
        <h1 className="phone:text-lg font-bold laptop:text-2xl">
          Skills & Experience
        </h1>
        <p>
          Programming languages, frameworks, and more that I&apos;ve worked
          with.
        </p>
      </div>
    </div>
  );
};

export default Skills;
