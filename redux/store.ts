// Redux Store
// This is the central place where all Redux states are registered.

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

// Root State Type
export type RootState = ReturnType<typeof store.getState>;

// Dispatch Type
export type AppDispatch = typeof store.dispatch;