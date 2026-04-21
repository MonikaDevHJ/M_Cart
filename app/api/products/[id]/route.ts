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

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const product = await prisma.product.findUnique({
      where: { id }
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("GET ERROR:", error);

    return NextResponse.json(
      { error: "Failed to Fetch  Product " },
      { status: 500 }
    );
  }
}


export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // ✅ read formData (NOT JSON)
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const category = formData.get("category") as string;
    const stock = Number(formData.get("stock"));

    // ⚠️ ignore image for now (we fix later if needed)

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        category,
        stock
      }
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log("PUT ERROR:", error);

    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}
