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
        if (state.orders[id].orderedQuantity >= Quantity) {
          return state;
        }
        state.orders[id].orderedQuantity = state.orders[id].orderedQuantity + 1;
        state.total = state.total + Price;
      } else {
        state.orders[id] = { orderedQuantity: 0, availableQuantity: Quantity };
        state.total = state.total + Price;

      }
      return state;
    },
    removeItem: (state, { payload }) => {
      const { id, Quantity, Price } = payload;
      if (state.orders[id]?.availableQuantity > 0) {
        state.orders[id].availableQuantity =
          state.orders[id].availableQuantity - 1;
        state.total = state.total - Price;
      }
      return state;
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
