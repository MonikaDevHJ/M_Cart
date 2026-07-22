import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Please login" }, { status: 401 });
  }

  try {
    const body = await req.json();

    console.log("BODY RECEIVED:", body);

    const cartItem = await prisma.cart.create({
      data: {
        userId,
        productId: body.productId,
        quantity: 1
      }
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
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json([]);
    }

    const cartItems = await prisma.cart.findMany({
      where: {
        userId
      },
      include: {
        product: true
      },
      orderBy : {
        createdAt : "asc"
      }
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
