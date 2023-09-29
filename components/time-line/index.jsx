import React from "react";

const TimeLine = ({ data }) => {
  return (
    <div className="steps steps-vertical laptop:w-1/2">
      {data.map((each, index) => (
        <div key={index} className="step step-accent" data-content="★">
          <div className="text-left ml-5 my-5 flex flex-col gap-1">
            <h1 className="phone:text-base font-bold laptop:text-xl">
              {each.title}
            </h1>
            <p className="phone:text-sm laptop:text-base text-[#0064f2]">
              {each.start} — {each.end}
            </p>
            <p className="phone:text-sm laptop:text-base ">
              {each.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
