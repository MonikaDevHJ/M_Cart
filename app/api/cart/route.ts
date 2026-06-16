import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY RECEIVED:", body);

    const cartItem = await prisma.cart.create({
      data: {
        userId: body.userId,
        productId: body.productId,

        quantity: 1,
      },
    });

    console.log("CART CREATED:", cartItem);

    return NextResponse.json(cartItem);
  } catch (error) {
    console.log("API ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}


// Get items 
export async function GET() {
  try {
    const cartItems = await prisma.cart.findMany({
      include: {
        product: true,
      },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}