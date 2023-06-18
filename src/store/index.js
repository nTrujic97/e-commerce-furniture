import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import apiSlice from "./rootApiSlice";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

export default store;
