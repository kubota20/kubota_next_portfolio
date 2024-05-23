import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import ProjectCard from "@/components/ui/project-card";

interface ProjectListProps {
  title: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ title }) => {
  return (
    <div className="mt-10 space-y-4">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Suspense fallback={<Loading />}>
          <ProjectCard />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectList;
