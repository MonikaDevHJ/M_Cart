import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] as any[],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Store all cart items coming from database
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;