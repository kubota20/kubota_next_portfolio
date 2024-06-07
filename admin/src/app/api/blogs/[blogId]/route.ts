import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const connect = async () => {
  try {
    prisma.$connect();
  } catch (error) {
    return Error("データベース接続失敗");
  }
};

// 取得
export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    // blogIdに問題がある場合
    if (!params.blogId) {
      return new NextResponse("blog id is required", { status: 400 });
    }

    // findUnique 取得 一意の識別子またはIDを指定する必要がある
    const blog = await prisma.blog.findUnique({
      where: {
        id: params.blogId,
      },
      include: {
        category: true,
      },
    });

    // id 問題がある場合
    if (!blog) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// 変更
export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { title, summary, link, categoryId, imageUrl, release } =
      await req.json();

    if (!title) {
      return new NextResponse("title is required", { status: 400 });
    }

    if (!summary) {
      return new NextResponse("summary is required", { status: 400 });
    }

    if (!link) {
      return new NextResponse("link is required", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("imageUrl is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("categoryId is required", { status: 400 });
    }

    // blogIdに問題がある場合
    if (!params.blogId) {
      return new NextResponse("blog id is required", { status: 400 });
    }

    // update	更新 条件に一致するレコードを更新,一意の識別子またはIDを指定する必要がある
    const blog = await prisma.blog.update({
      where: {
        id: params.blogId,
      },
      data: {
        title,
        summary,
        link,
        imageUrl,
        categoryId,
        release,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// 消す
export async function DELETE(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    // blogIdに問題がある場合
    if (!params.blogId) {
      return new NextResponse("blog id is required", { status: 400 });
    }

    // deleteMany 複数件削除 条件に一致する全てのレコードを削除する
    const blog = await prisma.blog.deleteMany({
      where: {
        id: params.blogId,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
