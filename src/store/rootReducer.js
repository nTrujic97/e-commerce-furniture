import { combineReducers } from "redux";
import apiSlice from "./rootApiSlice";
import authSlice from "./auth-slice";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import armchairSlice from "./armchairsSlice/armchairsSlice";

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	auth: authSlice.reducer,
	product: productSlice.reducer,
	cart: cartSlice.reducer,
	armchairSlice: armchairSlice.reducer,
});
export default rootReducer;
