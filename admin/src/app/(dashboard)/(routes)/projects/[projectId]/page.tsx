import { prisma } from "@/lib/prisma";
import { ProjectForm } from "./components/project-form";

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: params.projectId,
    },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <ProjectForm categories={categories} initiaData={project} />
    </div>
  );
};

export default ProjectPage;
