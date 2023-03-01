import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Components/axios/Config.js";

export const CheckoutProductsInfo = createAsyncThunk("productsinfo", async () => {
    return axio.get("/api/cart");
  });
  const CheckoutProducts = createSlice({
    name: "productinfo",
    initialState: {
      CheckoutData: [],
      productLoading: true,
    },
    extraReducers: {
      [CheckoutProductsInfo.pending]: (state, action) => {
        state.productLoading = true;
      },
      [CheckoutProductsInfo.fulfilled]: (state, action) => {
        state.productLoading = false;
        state.CheckoutData = action.payload.data;
      },
      [CheckoutProductsInfo.rejected]: (state, action) => {
        state.productLoading = false;
      },
    },
  });
  
  const checkoutProductDetails = CheckoutProducts.reducer;
  export default checkoutProductDetails;
  