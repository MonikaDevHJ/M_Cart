"use client";

import { useEffect } from "react";

export default function SellerSavePage() {

  useEffect(() => {

    const saveSeller = async () => {

      const response = await fetch("/api/create-seller", {
        method: "POST",
      });

      const data = await response.json();

      console.log(data);

      window.location.href = "/seller";
    };

    saveSeller();

  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Creating Seller Account...</h1>
    </div>
  );
}