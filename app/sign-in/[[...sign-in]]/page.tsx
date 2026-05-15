"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      window.location.href = "/seller";
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}