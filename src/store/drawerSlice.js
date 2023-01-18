import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
    name: "drawersProducts",
    initialState: {
        drawersProducts :[]
    },
    reducers: {
        addProducts(state, action) {
            state.drawersProducts.push({
                
            })
        }
    },
})
export default drawerSlice.reducer;