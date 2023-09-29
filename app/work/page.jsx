import Projects from "@/components/projects";
import { bigProjects, openSourceProjects } from "@/utils";

const Work = () => {
  return (
    <div>
      <Projects title="Big Projects" data={bigProjects} />
      <Projects title="Open Source Projects" data={openSourceProjects} />
    </div>
  );
};

export default Work;
