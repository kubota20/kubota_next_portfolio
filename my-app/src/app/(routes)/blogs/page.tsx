// ブログ全体の記事

import BlogList from "@/components/blog-list";
import Container from "@/components/ui/container";

const BlogsPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
        <BlogList title="レイアウト" />
      </div>
    </Container>
  );
};

export default BlogsPage;
