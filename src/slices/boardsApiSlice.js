import { apiSlice } from "./apiSlice";
import { BOARDS_URL } from "../constants";


const boardApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query({
      query: () => ({
        url: BOARDS_URL,
      }),
      keepUnusedDataFor: 5,
    })
  })
});



export const {
  useGetAllBoardsQuery
} = boardApiSlice;

export default boardApiSlice;