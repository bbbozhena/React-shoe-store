import { createSlice } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice.js";

const drawerSlice = createSlice({
  name: "itemInDrawer",
  initialState: productSlice,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
  },
});
export const {add} = drawerSlice.actions
export const store = drawerSlice.reducer
export {drawerSlice}
