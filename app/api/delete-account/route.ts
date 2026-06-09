import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE() {
  console.log("DELETE API HIT");
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized"
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found"
      });
    }

    // Delete Products
    const deletedProduct = await prisma.product.deleteMany({
      where: {
        email: user.email
      }
    });
    console.log(deletedProduct);

    // Delete User
    await prisma.user.delete({
      where: {
        clerkId: userId
      }
    });

    // Delete Clerk Account
    const clerk = await clerkClient();
    console.log("Deleting Clerk User:", userId);

    await clerk.users.deleteUser(userId);
    console.log("Clerk User Deleted");

    return NextResponse.json({
      success: true,
      message: "Account deleted successfully"
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    });
  }
}
