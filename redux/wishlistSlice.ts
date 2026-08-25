import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] as any[],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    // Store all wishlist items coming from database
    setWishlistItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Export action
export const { setWishlistItems } = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;