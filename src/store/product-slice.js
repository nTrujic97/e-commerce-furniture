import { createSlice } from "@reduxjs/toolkit";
import { armchairsAPISlice } from "./armchairsSlice/armchairsAPISlice";

const initialState = {
	currentProducts: [],
	currentProductsName: "",
	tabsValue: "",
	singleProductData: {},
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		onSelectProduct(state, action) {
			state.currentProducts = action.payload;
		},
		onCurrentProductsName(state, action) {
			state.currentProductsName = action.payload;
		},
		onChangeTabsValue(state, action) {
			state.tabsValue = action.payload;
		},

		setSingleProductData(state, action) {
			state.singleProductData = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addMatcher(
			armchairsAPISlice.endpoints.getArmchairs.matchFulfilled,
			(state, action) => {
				state.currentProducts = action.payload.data;
			}
		);
	},
});

export const productActions = productSlice.actions;
export default productSlice;
