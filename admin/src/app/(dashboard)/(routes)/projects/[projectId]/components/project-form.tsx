"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

// prisma
import { Project, Category } from "@prisma/client";

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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const formScheme = z.object({
  title: z.string().min(3, { message: "3文字以上を入力" }),
  summary: z.string().min(10, { message: "10文字以上を入力" }),
  iframeSrc: z.string(),
  link: z.string(),
  imageUrl: z.string(),
  categoryId: z.string().min(1),
  release: z.boolean().default(false).optional(),
});

interface ProjectFormProps {
  initiaData: Project | null;
  categories: Category[];
}

type ProjectFormValues = z.infer<typeof formScheme>;

export const ProjectForm = ({ initiaData, categories }: ProjectFormProps) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initiaData ? "変更" : "作成";
  const description = initiaData ? "中身を変更します" : "新しく作成します";

  const toastMessage = initiaData ? "変更しました" : "作成しました";

  const action = initiaData ? "変更します" : "作成します";

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formScheme),
    defaultValues: initiaData
      ? { ...initiaData }
      : {
          title: "",
          summary: "",
          iframeSrc: "",
          link: "",
          imageUrl: "",
          categoryId: "",
          release: false,
        },
  });

  //   変更＆作成
  const onSubmit = async (data: ProjectFormValues) => {
    try {
      setLoading(true);
      if (initiaData) {
        // 変更
        await axios.patch(`/api/projects/${params.projectId}`, data);
      } else {
        // 作成
        await axios.post("/api/projects", data);
      }

      // 中身を変更したらProjectsページに飛ぶ
      router.refresh();
      router.push("/projects");

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
        await axios.delete(`/api/projects/${params.projectId}`);

        // 中身をきれいにします
        router.refresh();

        // 削除されたらProjectsページに飛ぶ
        router.push("/projects");
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
              name="title"
              render={({ field }) => (
                // title
                <FormItem>
                  <FormLabel>Title</FormLabel>
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
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                // summary
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="summary"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="iframeSrc"
              render={({ field }) => (
                // iframeSrc
                <FormItem>
                  <FormLabel>iframeSrc</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="iframeSrc"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                // link
                <FormItem>
                  <FormLabel>link</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="link" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                // imageUrl
                <FormItem>
                  <FormLabel>imageUrl</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="imageUrl"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                // imageUrl
                <FormItem>
                  <FormLabel>Categories</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger defaultValue={field.value}>
                        <SelectValue placeholder="Category Name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="release"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>公開</FormLabel>
                    <FormDescription>公開しますか？</FormDescription>
                  </div>
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
