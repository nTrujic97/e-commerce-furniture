import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "authentication",
	initialState: { isAuthenticated: false, token: null, userId: null },
	reducers: {
		onLogin(state, action) {
			state.token = action.payload;
			state.isAuthenticated = !!state.token;
		},
		onLogout(state) {
			state.isAuthenticated = !state.token;
		},
		getUserId(state, action) {
			state.userId = action.payload;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
