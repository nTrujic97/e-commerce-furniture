import apiSlice from "../rootApiSlice";

export const armchairsAPISlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getArmchairs: builder.query({
			query: () => "/arm-chairs",
		}),
	}),
});

export const { useGetArmchairsQuery } = armchairsAPISlice;
