import React from "react";

import ProjectList from "@/components/project-list";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import BlogList from "@/components/blog-list";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <div>{/* 画像か動画あればあとで入れる */}</div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProjectList title="レイアウト" />

            <Separator />

            <BlogList title="ブログ" />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
