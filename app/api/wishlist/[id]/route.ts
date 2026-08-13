import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Please login" },
      { status: 401 }
    );
  }

  try {
    await prisma.wishlist.delete({
      where: {
        userId_productId: {
          userId,
          productId: params.productId,
        },
      },
    });

    return NextResponse.json({
      message: "Removed from wishlist",
    });
  } catch (error) {
    console.log("WISHLIST DELETE ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}