"use client";

import { useEffect, useState } from "react";
import Item from "../../component/cart/CartItem";
import Amount from "../../component/cart/Amount";
import { useDispatch } from "react-redux";
import { setCartItems } from "@/redux/cartSlice";

const Page = () => {
  const dispatch = useDispatch();


  const fetchCartItems = async () => {
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();


      // Redux State
      dispatch(setCartItems(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="p-2 bg-gray-200 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
        <div className="lg:col-span-4">
          <Item
            fetchCartItems={fetchCartItems}
          />
        </div>

        <div className="lg:col-span-1 lg:mt-9">
          <Amount  />
        </div>
      </div>
    </div>
  );
};

export default Page;