"use client";
import { contactInfoList } from "@/utils";
import React from "react";
import ContactInfo from "../contact-info";

const SendAMessage = () => {
  return (
    <div>
      <div className="flex laptop:justify-around phone:flex-col laptop:flex-row">
        <div>
          <h1 className="phone:text-lg font-bold laptop:text-2xl">
            Send a Message
          </h1>
          <p className="phone:text-sm laptop:text-base">For any Queries</p>
        </div>

        <div className="laptop:w-1/2 phone:text-sm laptop:text-base">
          All my open source projects have their own GitHub Repository where you
          can create issues if you find a bug. Explain what happened when the
          bug occurred and I&apos;ll see what I can do.
        </div>
      </div>
      <div className="grid laptop:grid-cols-3 laptop:pl-28 gap-5 mt-5 phone:grid-cols-1">
        {contactInfoList.map((each, index) => (
          <ContactInfo key={index} {...each} />
        ))}
      </div>
    </div>
  );
};

export default SendAMessage;
