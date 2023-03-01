import { createSlice, current } from "@reduxjs/toolkit";
export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      let tempData = state.data.filter((item) => (item.id = action.payload.id));
      console.log(tempData,action.payload.id);
      state.data.push({ id: action.payload.id, order: 1 });
      state.total = state.total + action.payload.Price;
      return state;
    },
    removeItem: (state, action) => {
      return state;
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
