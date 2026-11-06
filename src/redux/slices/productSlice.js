import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products ")
    console.log(result.data.products);
    
    return result.data.products
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: true,
        allProducts: [],
        error: ""
    },
    reducers: {
        //define only synchronous action
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
            state.error = ""
        })
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true
            state.allProducts = []
            state.error = ""
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false
            state.allProducts = []
            state.error = "API call failed"
        })
    }
})

export default productSlice.reducer