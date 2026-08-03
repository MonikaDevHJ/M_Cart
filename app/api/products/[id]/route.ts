import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
// ================= DELETE PRODUCT =================
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.product.delete({
      where: { id }
    });
    // Clear /womens cache
    revalidatePath("/womens");

    return NextResponse.json({ message: "Product Deleted Successfully ✅" });
  } catch (error) {
    console.log("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}

// ================= GET SINGLE PRODUCT =================
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
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// ================= UPDATE PRODUCT =================
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const formData = await req.formData();

    // Seller Details
    const companyName = formData.get("companyName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const businessName = formData.get("businessName") as string;
    const gstNumber = formData.get("gstNumber") as string;
    const location = formData.get("location") as string;
    const sellerDesc = formData.get("sellerDesc") as string;

    // Product Details
    const productName = formData.get("productName") as string;
    const productPrice = Number(formData.get("productPrice"));
    const offerPercent = Number(formData.get("offerPercent"));
    const productSize = formData.get("productSize") as string;
    const selectCategory = formData.get("selectCategory") as string;
    const stockQuantity = Number(formData.get("stockQuantity"));
    const brandName = formData.get("brandName") as string;
    const selectSize = formData.get("selectSize") as string;

    const file = formData.get("productImage") as File;

    let productImage: string | undefined;

    // Upload new image if selected
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "m_cart_products" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      productImage = (upload as any).secure_url;
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        companyName,
        email,
        phone,
        businessName,
        gstNumber,
        location,
        sellerDesc,

        productName,
        productPrice,
        offerPercent,
        productSize,
        selectCategory,
        stockQuantity,
        brandName,
        selectSize,

        ...(productImage && { productImage })
      }
    });
    // Clear /womens cache
    revalidatePath("/womens");
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log("UPDATE ERROR:", error);

    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}
