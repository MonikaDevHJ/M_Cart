import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();

  const updatedCart = await prisma.cart.update({
    where: {
      id,
    },
    data: {
      quantity: body.quantity,
    },
  });

  return NextResponse.json(updatedCart);
}