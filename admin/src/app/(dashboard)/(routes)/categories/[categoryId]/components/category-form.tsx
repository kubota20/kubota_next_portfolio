"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

// prisma
import { Category } from "@prisma/client";

// hook
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// トースト
import toast from "react-hot-toast";

// HTTP通信
import axios from "axios";

// icon
import { Trash } from "lucide-react";

// components
import AlertModal from "@/components/modals/alert-modal";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formScheme = z.object({
  name: z.string().min(3, { message: "3文字以上を入力" }),
});

interface CategoryFormProps {
  initiaData: Category | null;
}

type CategoryFormValues = z.infer<typeof formScheme>;

export const CategoryForm = ({ initiaData }: CategoryFormProps) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initiaData ? "変更" : "作成";
  const description = initiaData ? "中身を変更します" : "新しく作成します";

  const toastMessage = initiaData ? "変更しました" : "作成しました";

  const action = initiaData ? "変更します" : "作成します";

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formScheme),
    defaultValues: initiaData
      ? { ...initiaData }
      : {
          name: "",
        },
  });

  //   変更＆作成
  const onSubmit = async (data: CategoryFormValues) => {
    try {
      setLoading(true);
      if (initiaData) {
        // 変更
        await axios.patch(`/api/categories/${params.categoryId}`, data);
      } else {
        // 作成
        await axios.post("/api/categories", data);
      }

      // 中身を変更したらcategoriesページに飛ぶ
      router.refresh();
      router.push("/categories");

      // 変更が成功したらトーストを表示
      toast.success(toastMessage);
    } catch (error) {
      // 失敗したらトーストを表示
      toast.error("失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // 削除
  const onDelete = async () => {
    try {
      setLoading(true);
      if (initiaData) {
        // 削除
        await axios.delete(`/api/categories/${params.categoryId}`);

        // 中身をきれいにします
        router.refresh();

        // 削除されたらcategoriesページに飛ぶ
        router.push("/categories");
      }
    } catch (error) {
      // 失敗したらトーストを表示
      toast.error("失敗しました");
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
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initiaData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator className="my-4" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                // title
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Size Value"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
