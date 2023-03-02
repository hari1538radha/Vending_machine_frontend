import { createSlice, current } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: [],

  reducers: {
    addItem: (state, { payload }) => {
      const { id } = payload;

      const doesItemExist = state.find((item) => item.id === id);
      if (doesItemExist) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              Order: item.Order + 1,
            };
          }

          return item;
        });
      } else {
        state.push({
          ...payload,
          Order: 1,
        });
      }
    },
    removeItem: (state, { payload }) => {
      const { id } = payload;
      return state.map((item) => {
        if (item.id === id) {
          if (item.quantity < 1) {
            console.log(current(item), "item is removed");
          } else {
            return {
              ...item,
              Order: item.Order - 1,
            };
          }
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
