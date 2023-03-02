import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const PostProductInfo = createAsyncThunk(
  "postporoducts",
  async (data) => {
    return axio.post(`/api/add`, data);
  }
);

const AddProduct = createSlice({
  name: "postporoducts",
  initialState: {
    postProductData: [],
    PostProductLoading: true,
  },
  extraReducers: {
    [PostProductInfo.pending]: (state, action) => {
      state.PostProductLoading = true;
    },
    [PostProductInfo.fulfilled]: (state, action) => {
      state.PostProductLoading = false;
      state.postProductData = action.payload;
    },
    [PostProductInfo.rejected]: (state, action) => {
      state.PostProductLoading = true;
    },
  },
});
const PostproductData = AddProduct.reducer;
export default PostproductData;
