import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized"
        },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId
      },
      select: {
        email: true,
        fullName: true,
        phone: true,
        location: true,
        profileImage: true
      }
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found"
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong"
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized"
        },
        { status: 401 }
      );
    }

    const data = await request.formData();

    const fullName = data.get("fullName") as string;
    const phone = data.get("phone") as string;
    const location = data.get("location") as string;
    const file = data.get("profileImage");

    let imageUrl = "";

    if (file && file instanceof File) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "m_cart_profiles" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = (upload as any).secure_url;
    }

    const updatedUser = await prisma.user.update({
      where: {
        clerkId: userId
      },
      data: {
        fullName,
        phone,
        location,
        ...(imageUrl && { profileImage: imageUrl })
      },
      select: {
        email: true,
        fullName: true,
        phone: true,
        location: true,
        profileImage: true
      }
    });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong"
      },
      { status: 500 }
    );
  }
}
