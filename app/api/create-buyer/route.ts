import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("API HIT");
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({
        message: "Unauthorized"
      });
    }

    const user = await currentUser();

    if (!user) {
      return NextResponse.json({
        message: "User not found"
      });
    }

    // Check already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (existingUser) {
      return NextResponse.json({
        message: "Seller already exists"
      });
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress
      }
    });
    if (existingEmail) {
      return NextResponse.json({
        message: `You Already register as ${existingEmail.role}`
      });
    }
    // Create Seller
    await prisma.user.create({
      data: {
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
        role: "buyer"
      }
    });

    return NextResponse.json({
      message: "Buyer  created successfully"
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Something went wrong"
    });
  }
}
