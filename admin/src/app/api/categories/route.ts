import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

// 渡す
export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return new NextResponse("name is required", { status: 400 });
    }

    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json({ category }, { status: 201 });
  } catch (error) {
    console.log("[CATEGORY_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  } finally {
    //必ず実行する
    await prisma.$disconnect();
  }
}

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany({});

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.log("[CATEGORIED_POST]", error);

    return new NextResponse("Interal error", { status: 500 });
  } finally {
    //必ず実行する
    await prisma.$disconnect();
  }
}
