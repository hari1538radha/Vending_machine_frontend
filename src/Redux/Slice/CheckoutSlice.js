import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";;

export const CheckoutProductsInfo = createAsyncThunk("productsinfo", async (data) => {
  console.log(data)

    return axio.post("/api/cart",data);
   
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
  