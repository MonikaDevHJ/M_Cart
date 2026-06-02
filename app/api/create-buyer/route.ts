import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized"
      });
    }

    const user = await currentUser();

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found"
      });
    }

    const email = user.emailAddresses[0].emailAddress;

    const existingEmail = await prisma.user.findUnique({
      where: { email }
    });

    if (existingEmail) {
      if (existingEmail.role === "buyer") {
        return NextResponse.json({
          success: true
        });
      }

      return NextResponse.json({
        success: false,
        message: "Already registered as seller"
      });
    }

    await prisma.user.create({
      data: {
        clerkId: userId,
        email,
        role: "buyer"
      }
    });

    return NextResponse.json({
      success: true,
      message: "Buyer created successfully"
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    });
  }
}