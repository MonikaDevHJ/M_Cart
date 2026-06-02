import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/getUserRole";

export default async function Buyer() {
  const user = await getUserRole();

  if (!user) {
    redirect("/buyer-signup");
  }
  if (user.role !== "buyer") {
    redirect("/seller");
  }

  return (
    <div>
      <p className="text-black text-2xl font-bold">Buyer Dashboard</p>
    </div>
  );
}
