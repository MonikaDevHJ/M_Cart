import { getUserRole } from "@/lib/getUserRole";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUserRole();

  return NextResponse.json(user);
}