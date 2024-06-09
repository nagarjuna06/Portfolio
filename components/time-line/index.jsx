"use client";
import { motion } from "framer-motion";
import React from "react";

const TimeLine = ({ data }) => {
  const textVariants = {
    initial: {
      x: -60,
      opacity: 0,
    },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    }),
  };
  return (
    <div className="steps steps-vertical laptop:w-1/2">
      {data.map((each, index) => (
        <div key={index} className="step step-accent" data-content="★">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="text-left ml-5 my-5 flex flex-col gap-1"
            custom={index + 1}
          >
            <motion.h1
              variants={textVariants}
              className="phone:text-base font-bold laptop:text-xl"
            >
              {each.title}
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="phone:text-sm laptop:text-base text-[#0064f2]"
            >
              {each.start} — {each.end}{" "}
              <b>{each.months && `(${each.months} months)`}</b>
            </motion.p>
            <motion.p
              variants={textVariants}
              className="phone:text-sm laptop:text-base "
            >
              {each.description}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
