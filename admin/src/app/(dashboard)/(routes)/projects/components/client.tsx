"use client";

import { useRouter } from "next/navigation";

import { ProjectColumnProps, columns } from "./columns";

import { DataTable } from "@/components/ui/data-teble";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";

interface ProductClientProps {
  data: ProjectColumnProps[];
}

export const ProjectClient = ({ data }: ProductClientProps) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Project (${data.length})`}
          description="Projectsページにようこそ!"
        />
        <Button onClick={() => router.push(`/projects/new`)}>
          <Plus className="mr-2 h-4 w-4" /> 追加
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
