import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Buyer() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <p className="text-black text-2xl font-bold">
        Buyer Dashboard
      </p>
    </div>
  );
}