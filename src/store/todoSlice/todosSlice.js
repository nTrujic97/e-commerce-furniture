import { createSlice } from "@reduxjs/toolkit";
import { todoAPISlice } from "./todoAPISlice";

const initialState = {
	listOfTodos: [],
};

const todosSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(
			todoAPISlice.endpoints.getTodos.matchFulfilled,
			(state, action) => {
				state.listOfTodos = action.payload;
			}
		);
	},
});

export const authActions = todosSlice.actions;
export default todosSlice;
