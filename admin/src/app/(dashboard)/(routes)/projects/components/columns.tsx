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
    header: "タイトル",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "summary",
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
    accessorKey: "iframeSrc",
    header: "iframeSrc",
  },
  {
    accessorKey: "category",
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
    enableHiding: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
