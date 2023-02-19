import { createSlice } from "@reduxjs/toolkit";
export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: { orders: {yellow:"nfas"} },
  reducers: {
    addItem: (state, action) => {
      console.log(state);
      return state;
    },
    removeItem: (state, action) => {
      console.log(action, state);
      return state;
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
