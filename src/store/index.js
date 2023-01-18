import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import drawerReducer from "./drawerSlice"

export default configureStore({
  reducer: {
    products: productReducer,
    drawerProducts: drawerReducer,
  },
});
