import Projects from "@/components/projects";
import { bigProjects, featured, openSourceProjects } from "@/utils";

const Work = () => {
  return (
    <div>
      <Projects title="Featured" data={featured} />
      <Projects title="Big Projects" data={bigProjects} />
      <Projects title="Open Source Projects" data={openSourceProjects} />
    </div>
  );
};

export default Work;
