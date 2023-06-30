import { createSlice } from "@reduxjs/toolkit";
import { armchairsAPISlice } from "./armchairsAPISlice";

const initialState = {
	armchairs: [],
};

const armchairSlice = createSlice({
	name: "armchairs",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(
			armchairsAPISlice.endpoints.getArmchairs.matchFulfilled,
			(state, action) => {
				state.armchairs = action.payload;
			}
		);
	},
});

export const authActions = armchairSlice.actions;
export default armchairSlice;
