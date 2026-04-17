import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function DELET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await prisma.product.delete({
      where: { id }
    });
    return NextResponse.json({ message: "Product Deleted  ✅" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Deelet Product" },
      { status: 500 }
    );
  }
}
