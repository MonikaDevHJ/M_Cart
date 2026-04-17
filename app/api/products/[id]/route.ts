import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ FIX HERE

    console.log("Deleting ID:", id);

    const deletedProduct = await prisma.product.delete({
      where: { id }
    });

    console.log("Deleted:", deletedProduct);

    return NextResponse.json({ message: "Product Deleted ✅" });
  } catch (error) {
    console.log("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
} 