import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
	tagTypes: [],
	reducerPath: "api",
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3006/api",
		prepareHeaders: (headers) => {
			headers.append("Content-Type", "application/json");
			return headers;
		},
	}),
});

export default apiSlice;
