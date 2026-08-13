import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


// ADD TO WISHLIST
export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Please login" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();

    const wishlistItem = await prisma.wishlist.create({
      data: {
        userId,
        productId: body.productId,
      },
    });

    return NextResponse.json(wishlistItem);
  } catch (error) {
    console.log("WISHLIST POST ERROR:", error);

    return NextResponse.json(
      { message: "Item already in wishlist or something went wrong" },
      { status: 500 }
    );
  }
}


// GET WISHLIST
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json([]);
    }

    const wishlistItems = await prisma.wishlist.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(wishlistItems);
  } catch (error) {
    console.log("WISHLIST GET ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}