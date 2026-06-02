"use client";

import { useEffect, useState } from "react";

export default function BuyerSavePage() {
  const [error, setError] = useState("");

  useEffect(() => {
    const saveBuyer = async () => {
      const response = await fetch("/api/create-buyer", {
        method: "POST",
      });

      const data = await response.json();

     if(data.success){
      window.location.href = "/buyer";
      return;
     }

     setError(data.message)
    };

    saveBuyer();
  }, []);

  return (
    <div>
      {error ? (
        <>
          <h1>{error}</h1>
          <p>Please use another email.</p>
        </>
      ) : (
        <h1>Creating Buyer Account...</h1>
      )}
    </div>
  );
}