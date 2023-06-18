import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "products",
	initialState: { cartProducts: [], isItTrue: false },
	reducers: {
		addToCart(state, action) {
			state.cartProducts = action.payload;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
