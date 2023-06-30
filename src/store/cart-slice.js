import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "products",
	initialState: { cartProducts: [], isItTrue: false },
	reducers: {
		addToCart(state, action) {
			const doesExist = state.cartProducts.find(
				(product) => product.image === action.payload.image
			);

			if (doesExist) {
				doesExist.quantity++;
			} else state.cartProducts.push(action.payload);
		},
		onRemoveProduct(state, action) {
			const doesExist = state.cartProducts.find(
				(product) => product.image === action.payload.image
			);
			const index = state.cartProducts.indexOf(doesExist);

			if (doesExist) {
				if (doesExist.quantity > 0) doesExist.quantity--;
			}
			if (doesExist.quantity < 1) {
				state.cartProducts.splice(index, 1);
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
