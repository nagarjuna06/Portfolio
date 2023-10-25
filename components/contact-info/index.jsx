"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ContactInfo = ({ Icon, title, subtitle, link = "" }) => {
  const router = useRouter();
  const [copy, setCopy] = useState(false);

  const onCopy = () => {
    if (link) {
      router.push(link);
      return;
    }
    setCopy(true);
    navigator.clipboard.writeText(title);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
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
        staggerChildren: 1,
      },
    },
  };
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="card flex flex-row items-center gap-5 group p-2 cursor-pointer"
      onClick={onCopy}
    >
      <motion.div
        variants={textVariants}
        className="laptop:text-2xl phone:text-lg text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-200  duration-500 p-2  rounded-full bg-gray-100"
      >
        <Icon />
      </motion.div>
      <motion.div variants={textVariants}>
        <h2 className="phone:text-base laptop:text-lg font-medium">{title}</h2>
        {copy ? (
          <p className="text-blue-600 font-medium">Copied !</p>
        ) : (
          <p className="text-gray-500 phone:text-sm">{subtitle}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
