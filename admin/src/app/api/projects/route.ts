import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

// 渡す
export async function POST(req: Request) {
  try {
    const { title, summary, iframeSrc, link, imageUrl, categoryId, release } =
      await req.json();

    if (!title) {
      return new NextResponse("title is required", { status: 400 });
    }

    if (!summary) {
      return new NextResponse("summary is required", { status: 400 });
    }

    if (!iframeSrc) {
      return new NextResponse("iframeSrc is required", { status: 400 });
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

    // create 作成
    const project = await prisma.project.create({
      data: {
        title,
        summary,
        iframeSrc,
        link,
        imageUrl,
        categoryId,
        release,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("[PROJECT_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;

    const projects = await prisma.project.findMany({
      where: {
        categoryId,
        release: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.log("[PROJECTS_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  }
}
