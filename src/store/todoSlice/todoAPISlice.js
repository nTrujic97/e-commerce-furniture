import apiSlice from "../rootApiSlice";

export const todoAPISlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => "/todos",
		}),
	}),
});

export const { useGetTodosQuery } = todoAPISlice;
