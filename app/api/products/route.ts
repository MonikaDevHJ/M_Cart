import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.formData(); // ✅ change here

    const name = data.get("name") as string;
    const description = data.get("description") as string;
    const price = data.get("price") as string;
    const category = data.get("category") as string;
    const stock = data.get("stock") as string;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        category,
        stock: Number(stock),
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