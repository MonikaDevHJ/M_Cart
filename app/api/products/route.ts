import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

// ✅ GET → Fetch products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { created_at: "desc" }
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// ✅ POST → Add product
export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // Seller Details
    const companyName = data.get("companyName") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const businessName = data.get("businessName") as string;
    const gstNumber = data.get("gstNumber") as string;
    const location = data.get("location") as string;
    const sellerDesc = data.get("sellerDesc") as string;

    // Product Details
    const productName = data.get("productName") as string;
    const productPrice = data.get("productPrice")as string;
    const productSize = data.get("productSize") as string;
    const selectCategory = data.get("selectCategory") as string;
    const stockQuantity = data.get("stockQuantity") as string;
    const brandName = data.get("brandName") as string;
    const selectSize = data.get("selectSize") as string;

    const file = data.get("productImage");

    let imageUrl = "";

    // Upload Image to Cloudinary
    if (file && file instanceof File) {
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

      imageUrl = (upload as any).secure_url;
    }

    // Save to Database
    const product = await prisma.product.create({
      data: {
        companyName,
        email,
        phone,
        businessName,
        gstNumber,
        location,
        sellerDesc,

        productName,
        productSize,
        productPrice,
        selectCategory,
        stockQuantity: Number(stockQuantity),
        brandName,
        selectSize,

        productImage: imageUrl
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("FULL ERROR => ", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
