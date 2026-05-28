"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SellerSavePage() {

  const [error, setError] = useState("");

  useEffect(() => {

    const saveSeller = async () => {

      const response = await fetch("/api/create-seller", {
        method: "POST",
      });

      const data = await response.json();

      console.log(data);

      // IF ERROR
      if (
        data.message.includes("already")
      ) {
        setError(data.message);
        return;
      }

      // SUCCESS
      window.location.href = "/seller";
    };

    saveSeller();

  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">

      {error ? (
        <>
          <h1 className="text-red-500 text-xl font-bold">
            {error}
          </h1>

          <p>
            Please login with another email as Seller.
          </p>

          <Link
            href="/buyer"
            className="bg-fuchsia-600 text-white px-4 py-2 rounded-lg"
          >
            Go Back to Buyer
          </Link>
        </>
      ) : (
        <h1>Creating Seller Account...</h1>
      )}

    </div>
  );
}