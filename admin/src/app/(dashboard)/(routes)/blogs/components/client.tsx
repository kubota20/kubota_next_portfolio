"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { BlogColumnProps, columns } from "./columns";

import { DataTable } from "@/components/ui/data-teble";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";

interface BlogClientProps {
  data: BlogColumnProps[];
}

export const BlogClient = ({ data }: BlogClientProps) => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Blog (${data.length})`}
          description="Blogsページにようこそ!"
        />
        <Button onClick={() => router.push(`/blogs/new`)}>
          <Plus className="mr-2 h-4 w-4" /> 追加
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="title" columns={columns} data={data} />
    </>
  );
};
