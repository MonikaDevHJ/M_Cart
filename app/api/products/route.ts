import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, description, price, category, stock } = body;

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