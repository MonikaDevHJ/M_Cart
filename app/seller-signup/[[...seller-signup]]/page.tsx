"use client";

import { SignUp } from "@clerk/nextjs";
export default function SellerSignUp() {
  return (
    <div className="flex justify-between justify-center items-center min-h-screen">
      <SignUp forceRedirectUrl={"/seller-save"} />
    </div>
  );
}
