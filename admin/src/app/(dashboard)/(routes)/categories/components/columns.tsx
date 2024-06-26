"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./call-action";

export type CategoryColumnProps = {
  id: string;
  name: string;
};

export const columns: ColumnDef<CategoryColumnProps>[] = [
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
    accessorKey: "name",
    enableHiding: false,
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    id: "actions",
    header: "設定",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
