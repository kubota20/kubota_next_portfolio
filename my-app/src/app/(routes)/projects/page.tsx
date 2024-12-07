// プロジェクト全体のページ

import ProjectList from "@/components/project-list";
import Container from "@/components/ui/container";
import React from "react";
import Link from "next/link";
import { getProjects } from "@/action/get-projects";
import { getProject } from "@/action/get-project";

const ProjectsPage = async (id: string) => {
  const project = await getProject(id);

  // const projects = await getProjects({
  //   categoryId: project?.category?.id
  // });

  console.log(project, "Project GET");

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
          <ProjectList title="レイアウト" />
        </div>
        <Link href="/projects/corporate-site">テストサイト</Link>
      </Container>
    </>
  );
};

export default ProjectsPage;
