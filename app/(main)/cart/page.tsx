"use client";

import { useEffect, useState } from "react";
import Item from "../../component/cart/CartItem";
import Amount from "../../component/cart/Amount";

const Page = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    const res = await fetch("/api/cart");
    const data = await res.json();
    setCartItems(data);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="p-2 bg-gray-200 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">

        <div className="lg:col-span-4">
          <Item
            cartItems={cartItems}
            fetchCartItems={fetchCartItems}
          />
        </div>

        <div className="lg:col-span-1 lg:mt-9">
          <Amount
            cartItems={cartItems}
          />
        </div>

      </div>
    </div>
  );
};

export default Page;