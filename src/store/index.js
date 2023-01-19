import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import {drawerSlice} from "./drawerSlice"

export default configureStore({
  reducer: {
    products: productReducer,
    drawerSlice:drawerSlice
  },
});
