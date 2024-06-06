"use client";

import { DataTable } from "@/components/ui/data-teble";
import { ProjectColumnProps, columns } from "./columns";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

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
          description="Projectsページにようこそ！"
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
