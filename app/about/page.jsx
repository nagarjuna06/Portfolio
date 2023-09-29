import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import Social from "@/components/social";
import { eduction, experience } from "@/utils";

const About = () => {
  return (
    <div className="laptop:px-10 phone:px-4">
      <Profile />
      <Skills />
      <Experience {...experience} />
      <Experience {...eduction} />
      <Social />
    </div>
  );
};

export default About;
