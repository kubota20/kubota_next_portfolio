import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import BlogCard from "./ui/blog-card";

interface BlogListProps {
  title: string;
}

const BlogList: React.FC<BlogListProps> = ({ title }) => {
  return (
    <div className="mt-10 space-y-4">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="grid col-span-1 sm:grid-cols-2  gap-4">
        <Suspense fallback={<Loading />}>
          <BlogCard />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogList;
