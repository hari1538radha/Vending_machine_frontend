import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productDetails from "./Slice/GetProductsslice";
import PostproductData from "./Slice/PostProductslice";
import LoginDetails from "./Slice/Login";
import  OrderSlice  from "./Slice/OrderSlice";
import checkoutProductDetails from "./Slice/CheckoutSlice";

const rootReducer = combineReducers({
  ProductInfo: productDetails,
  AddproductInfo: PostproductData,
  LoginInfo: LoginDetails,
  OrderInfo: OrderSlice,
  CheckOutInfo :checkoutProductDetails
});
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
