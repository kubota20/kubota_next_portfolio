import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/container";

import { ProjectClient } from "./components/client";
import { ProjectColumnProps } from "./components/columns";

import { format } from "date-fns";

const ProjectsPage = async () => {
  // findMany	複数件取得 条件に一致する全てのレコードを取得
  const projects = await prisma.project.findMany({
    include: {
      category: true, // カテゴリーデータを含める
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
    <div className="pt-6  flex-1 p-8">
      <Container>
        <ProjectClient data={formattedProjectsColumn} />
      </Container>
    </div>
  );
};

export default ProjectsPage;
