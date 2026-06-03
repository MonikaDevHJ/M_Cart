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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {error ? (
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>

          <h1 className="text-2xl font-bold text-red-600 mb-3">
            Account Access Issue
          </h1>

          <p className="text-gray-700 mb-4">{error}</p>

          <p className="text-gray-500 mb-6">
            Please use another email address or login with the correct account.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="/buyer"
              className="bg-fuchsia-600 text-white py-3 rounded-xl font-medium hover:bg-fuchsia-700 transition"
            >
              Login as buyer
            </a>

            <a
              href="/"
              className="border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Go to Home
            </a>
          </div>
        </div>
      ) : (
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-fuchsia-600 border-t-transparent mx-auto mb-4"></div>

          <h1 className="text-xl font-semibold text-gray-800">
            Creating Buyer Account...
          </h1>

          <p className="text-gray-500 mt-2">
            Please wait while we set up your account.
          </p>
        </div>
      )}
    </div>
  );
}
