"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./call-action";

export type BlogColumnProps = {
  id: string;
  title: string;
  summary: string;
  link: string;
  imageUrl: string;
  category: string;
  release: boolean;
  createdAt: string;
};

export const columns: ColumnDef<BlogColumnProps>[] = [
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
    header: "タイトル",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "summary",
    enableHiding: false,
    header: "概要",
  },
  {
    accessorKey: "link",
    header: "リンク",
  },
  {
    accessorKey: "imageUrl",
    header: "画像URL",
  },
  {
    accessorKey: "category",
    enableHiding: false,
    header: "カテゴリ",
  },
  {
    accessorKey: "release",
    enableHiding: false,
    header: "公開",
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
