import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ productId: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Please login" },
        { status: 401 }
      );
    }

    console.log("CONTEXT:", context);

    const params = await context.params;

    console.log("PARAMS:", params);
    console.log("PRODUCT ID:", params.productId);

    if (!params.productId) {
      return NextResponse.json(
        { message: "Product ID is missing" },
        { status: 400 }
      );
    }

    const deletedWishlist = await prisma.wishlist.delete({
      where: {
        userId_productId: {
          userId,
          productId: params.productId,
        },
      },
    });

    console.log("DELETED WISHLIST:", deletedWishlist);

    return NextResponse.json({
      message: "Removed from wishlist",
      wishlist: deletedWishlist,
    });
  } catch (error) {
    console.log("WISHLIST DELETE ERROR:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
        error: String(error),
      },
      { status: 500 }
    );
  }
}