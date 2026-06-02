// Get helper Function for Protect DashBoard Seller or Navbar


import { auth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function getUserRole() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  return user;
}