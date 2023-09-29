import { skillsList } from "@/utils";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex w-full phone:flex-col-reverse laptop:flex-row  p-3 justify-around laptop:mt-10 laptop:pl-20  gap-8">
      <div className="grid laptop:grid-cols-4 phone:grid-cols-2 tablet:grid-cols-3 w-full gap-10">
        {skillsList.map((each, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-2 font-medium text-gray-600 "
          >
            <Image
              src={each.image}
              width={50}
              height={50}
              alt="skill"
              className="skill-image"
              draggable={false}
            />
            <p className="skill-name phone:text-sm">{each.name}</p>
          </div>
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
