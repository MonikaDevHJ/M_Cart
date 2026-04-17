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

    const name = data.get("name") as string;
    const description = data.get("description") as string;
    const price = data.get("price") as string;
    const category = data.get("category") as string;
    const stock = data.get("stock") as string;

    const file = data.get("image") as File;

    let imageUrl = "";

    if (file) {
      const bytes = await file.arrayBuffer(); // ✅ fixed
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = (upload as any).secure_url;
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        category,
        stock: Number(stock),
        image_url: imageUrl
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
