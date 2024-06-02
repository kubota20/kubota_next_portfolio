import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB接続失敗");
  }
}

export const GET = async (rrq: Request, res: NextResponse) => {
  try {
    await main();
    const user = await prisma.user.findMany({});
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect;
  }
};
