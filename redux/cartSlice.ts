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

// Export action
export const { setCartItems } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;