"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CategoryColumnProps } from "./columns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/modals/alert-modal";

import { MoreHorizontal, Edit, Copy, Trash } from "lucide-react";

import toast from "react-hot-toast";
import axios from "axios";

interface CellActionProps {
  data: CategoryColumnProps;
}

export const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // IDコピーボタン
  const onClickCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("IDをコピーしました");
  };

  // 変更ボタン
  const onClickLink = () => {
    router.push(`/categories/${data.id}`);
  };

  //   削除ボタン
  const onClickDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/categories/${data.id}`);

      router.refresh();

      toast.success("削除されました");
    } catch (error) {
      toast.error("エラーが起きました");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onClickDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onClickCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" />
            IDをコピー
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onClickLink}>
            <Edit className="mr-2 h-4 w-4" />
            変更
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" />
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
