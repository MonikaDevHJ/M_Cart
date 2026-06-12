// it will Create Redux Store means it is the brain of Redux Store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Root State Type
export type RootState = ReturnType <typeof store.getState>

// dispatch type
export type AppDispatch = typeof store.dispatch