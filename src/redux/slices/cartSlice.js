import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        //add to cart - view and wishlist component
        addCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
                const remainigItem = state?.filter(item => item.id != existingItem.id)
                state = [...remainigItem, existingItem]
            } else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer