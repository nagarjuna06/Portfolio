import SendAMessage from "@/components/send-a-message";
import Social from "@/components/social";
import React from "react";

const Contact = () => {
  return (
    <div className="laptop:px-10 laptop:mt-10 phone:px-4">
      <SendAMessage />
      <Social />
    </div>
  );
};

export default Contact;
