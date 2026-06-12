// it will Create Redux Store means it is the brain of Redux Store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
