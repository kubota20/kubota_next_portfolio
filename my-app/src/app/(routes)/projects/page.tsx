// プロジェクト全体のページ

import ProjectList from "@/components/project-list";
import Container from "@/components/ui/container";
import React from "react";

const ProjectsPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
        <ProjectList title="レイアウト" />
      </div>
    </Container>
  );
};

export default ProjectsPage;
