import { createSlice, current } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: { orders: {}, total: 0 },

  reducers: {
    addItem: (state, { payload }) => {
      const { id, Quantity, Price } = payload;
      if (!Quantity) {
        return state;
      }
      if (state.orders[id]) {
        if (state.orders[id] >= Quantity) {
          return state;
        }
        state.orders[id] = state.orders[id] + 1;
        state.total = state.total + Price;
      } else {
        state.orders[id] = 1;
        state.total = state.total + Price;
      }
      return state;
    },
    removeItem: (state, { payload }) => {
      const { id, Price } = payload;
      if (state.orders[id] && state.orders[id] > 0) {
        state.orders[id] = state.orders[id] - 1;
        state.total = state.total - Price;
      }
      return state;
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
