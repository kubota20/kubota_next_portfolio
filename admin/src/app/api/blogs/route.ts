import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const connect = async () => {
  try {
    prisma.$connect();
  } catch (error) {
    return Error("データベース接続失敗");
  }
};

// 渡す
export async function POST(req: Request) {
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

    await connect();

    // create 作成
    const blog = await prisma.blog.create({
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
    console.log("[BLOG_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;

    const blogs = await prisma.blog.findMany({
      where: {
        categoryId,
        release: false,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.log("[BLOGS_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  }
}
