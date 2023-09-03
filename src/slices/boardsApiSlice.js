import { apiSlice } from "./apiSlice";
import { BOARDS_URL } from "../constants";


const baordApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query({
      query: () => ({
        url: BOARDS_URL,
      }),
      keepUnusedDataFor: 5,
    })
  })
});
