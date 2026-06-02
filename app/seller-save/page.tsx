"use client";

import { useEffect, useState } from "react";

export default function SellerSavePage() {
  const [error, setError] = useState("");

  useEffect(() => {
    const saveSeller = async () => {
      const response = await fetch("/api/create-seller", {
        method: "POST"
      });

      const data = await response.json();

     if(data.success){
      window.location.href = "/seller";
      return;
     }

     setError(data.message)
    };

    saveSeller();
  }, []);

  return (
    <div>
      {error ? (
        <>
          <h1>{error}</h1>
          <p>Please use another email.</p>
        </>
      ) : (
        <h1>Creating Seller Account...</h1>
      )}
    </div>
  );
}
