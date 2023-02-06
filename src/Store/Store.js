import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productDetails from "./Slice/GetProductsslice";
import PostproductData from "./Slice/PostProductslice";
import LoginDetails from "./Slice/Login";

const rootReducer = combineReducers({
  ProductInfo: productDetails,
  AddproductInfo: PostproductData,
  LoginInfo: LoginDetails,
});
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
