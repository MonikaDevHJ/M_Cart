"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/seller"); //Force to Redirect To Seller Dashboard UI
    }
  }, [isSignedIn]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />{" "}
    </div>
  );
}
