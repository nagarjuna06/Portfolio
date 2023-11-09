"use client";

import { socialList } from "@/utils";
import CustomLink from "../customLink";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="flex laptop:justify-around laptop:flex-row phone:flex-col mt-10 laptop:pl-2">
      <div>
        <h1 className="phone:text-lg font-bold laptop:text-2xl">Socials</h1>
        <p className="phone:text-sm laptop:text-base">
          Where you can find even more.
        </p>
      </div>
      <div className="laptop:w-1/2 phone:text-sm laptop:text-base">
        Follow me on one of the social media platforms below if you want.
        Occasionally I&apos;ll post projects in LinkedIn.
        <div className="mt-5 grid laptop:grid-cols-3 phone:grid-cols-2 laptop:gap-8 phone:gap-5">
          {socialList.map((each, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CustomLink {...each} move={false} target="blank" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
