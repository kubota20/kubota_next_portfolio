"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./call-action";

export type ProjectColumnProps = {
  id: string;
  title: string;
  summary: string;
  iframeSrc: string;
  link: string;
  imageUrl: string;
  category: string;
  release: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProjectColumnProps>[] = [
  {
    id: "id",
    header: ({ table }) => (
      // チェックしたら全てのテーブルデータがチェックできます
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),

    cell: ({ row }) => (
      // 単体のテーブルデータがチェックできます
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    enableHiding: false,
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "summary",
    enableHiding: false,
    header: "Summary",
  },
  {
    accessorKey: "iframesSrc",
    header: "IframeSrc",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "imageUrl",
    header: "ImageUrl",
  },
  {
    accessorKey: "category",
    enableHiding: false,
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    header: "設定",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
