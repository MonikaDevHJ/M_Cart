import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");

    if (!search) {
      return NextResponse.json(
        { error: "Search is required" },
        { status: 400 }
      );
    }
const product = await prisma.product.findFirst({
  where: {
    OR: [
      {
        productName: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        brandName: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        selectCategory: {
          contains: search,
          mode: "insensitive",
        },
      },
    ],
  },
});

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}