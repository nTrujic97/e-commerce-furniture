import { createSlice } from "@reduxjs/toolkit";
import data from "../images/armchairImages.json";

const productSlice = createSlice({
	name: "products",
	initialState: { currentProducts: data, currentProductsName: "" },
	reducers: {
		onSelectProduct(state, action) {
			state.currentProducts = action.payload;
		},
		onCurrentProductsName(state, action) {
			state.currentProductsName = action.payload;
		},
		// onLogout(state) {
		// 	state.isAuthenticated = !state.token;
		// },
		// getUserId(state, action) {
		// 	state.userId = action.payload;
		// },
	},
});

export const productActions = productSlice.actions;
export default productSlice;
