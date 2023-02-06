import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetProductsInfo = createAsyncThunk(
  "productsinfo",
  async (data) => {
    return fetch(`https://nice-pink-chinchilla-belt.cyclic.app/api/products`, {
      method: "GET",
      headers: {},
    }).then((response) => response.json());
  }
);
const products = createSlice({
  name: "productinfo",
  initialState: {
    productsData: [],
    productLoading: true,
  },
  extraReducers: {
    [GetProductsInfo.pending]: (state, action) => {
      state.productLoading = true;
    },
    [GetProductsInfo.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.productsData = action.payload;
    },
    [GetProductsInfo.rejected]: (state, action) => {
      state.productLoading = false;
    },
  },
});

const productDetails = products.reducer;
export default productDetails;
