"use client";

import { DataTable } from "@/components/ui/data-teble";
import { ProjectColumnProps, columns } from "./columns";
export const ProjectClient = () => {
  return (
    <div>
      <DataTable searchKey="name" columns={columns} data={[]} />
    </div>
  );
};
