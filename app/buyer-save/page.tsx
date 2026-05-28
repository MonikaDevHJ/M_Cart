"use client";

import { useEffect } from "react";

export default function BuyerSavePage() {

  useEffect(() => {

    const saveBuyer = async () => {

      const response = await fetch("/api/create-buyer", {
        method: "POST",
      });

      const data = await response.json();

      console.log(data);

      window.location.href = "/buyer";
    };

    saveBuyer();

  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Creating Buyer Account...</h1>
    </div>
  );
}