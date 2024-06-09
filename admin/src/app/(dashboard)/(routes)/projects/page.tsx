import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/container";

import { ProjectClient } from "./components/client";
import { ProjectColumnProps } from "./components/columns";

import { format } from "date-fns";

const ProjectsPage = async () => {
  // findMany	複数件取得 条件に一致する全てのレコードを取得
  const projects = await prisma.project.findMany({
    include: {
      category: true, // カテゴリを含める
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProjectsColumn: ProjectColumnProps[] = projects.map(
    (item) => ({
      id: item.id,
      title: item.title,
      summary: item.summary,
      iframeSrc: item.iframeSrc,
      link: item.link,
      imageUrl: item.imageUrl,
      category: item.category?.name,
      release: item.release,
      createdAt: format(item.createdAt, "yyyy年MM月dd日 HH:mm"),
    })
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="pt-6 p-8 w-full  sm:max-w-screen-sm md:max-w-screen-md 2xl:max-w-screen-lg">
        <Container>
          <ProjectClient data={formattedProjectsColumn} />
        </Container>
      </div>
    </div>
  );
};

export default ProjectsPage;
