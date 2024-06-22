import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addIteam: (state, action) => {
      state.items.push(action.payload);
    },
    removeIteam: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id != action.payload;
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addIteam, clearCart, removeIteam } = cartSlice.actions;
export default cartSlice.reducer;
