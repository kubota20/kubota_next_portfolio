"use client";

import { DataTable } from "@/components/ui/data-teble";
import { CategoryColumnProps, columns } from "./columns";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface CategoryClientProps {
  data: CategoryColumnProps[];
}

export const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Categoriesページにようこそ!"
        />
        <Button onClick={() => router.push(`/categories/new`)}>
          <Plus className="mr-2 h-4 w-4" /> 追加
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
