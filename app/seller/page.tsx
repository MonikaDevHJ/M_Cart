import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Seller() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Seller Dashboard</h1>
    </div>
  );
}