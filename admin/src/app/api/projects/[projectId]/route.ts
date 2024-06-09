import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 取得
export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    // projectIdに問題がある場合
    if (!params.projectId) {
      return new NextResponse("Project id is required", { status: 400 });
    }

    // findUnique 取得 一意の識別子またはIDを指定する必要がある
    const product = await prisma.project.findUnique({
      where: {
        id: params.projectId,
      },
      include: {
        category: true,
      },
    });

    // id 問題がある場合
    if (!product) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PROJECT_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// 変更
export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const body = await req.json();

    const { title, summary, iframeSrc, link, imageUrl, categoryId, release } =
      body;

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

    // projectIdに問題がある場合
    if (!params.projectId) {
      return new NextResponse("Project id is required", { status: 400 });
    }

    // update	更新 条件に一致するレコードを更新,一意の識別子またはIDを指定する必要がある
    const project = await prisma.project.update({
      where: {
        id: params.projectId,
      },
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
    console.log("[PROJECT_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// 消す
export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    // projectIdに問題がある場合
    if (!params.projectId) {
      return new NextResponse("Project id is required", { status: 400 });
    }

    // deleteMany 複数件削除 条件に一致する全てのレコードを削除する
    const product = await prisma.project.deleteMany({
      where: {
        id: params.projectId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PROJECT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
