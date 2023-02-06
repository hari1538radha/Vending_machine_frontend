import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Components/Config/Config";

export const GetProductsInfo = createAsyncThunk("productsinfo", async () => {
  return axio.get("/api/products");
});
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
