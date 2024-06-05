import Container from "@/components/ui/container";

import { ProjectClient } from "./components/client";

const ProjectsPage = () => {
  return (
    <div className="my-12 flex flex-1">
      <Container>
        <ProjectClient />
      </Container>
    </div>
  );
};

export default ProjectsPage;
