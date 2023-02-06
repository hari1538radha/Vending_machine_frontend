import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productDetails from "./Slice/GetProductsslice";
import PostproductData from "./Slice/PostProductslice";

const rootReducer = combineReducers({
  ProductInfo: productDetails,
  AddproductInfo:PostproductData
});
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
