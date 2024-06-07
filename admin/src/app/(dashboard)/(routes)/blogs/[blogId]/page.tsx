import { prisma } from "@/lib/prisma";
import { BlogForm } from "./components/blog-form";

const BlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.blogId,
    },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogForm categories={categories} initiaData={blog} />
      </div>
    </div>
  );
};

export default BlogPage;
