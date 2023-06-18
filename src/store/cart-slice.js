import { createSlice } from "@reduxjs/toolkit";
import data from "../images/armchairImages.json";

const cartSlice = createSlice({
	name: "products",
	initialState: { cartProducts: [] },
	reducers: {
		addToCart(state, action) {
			state.cartProducts = action.payload;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
