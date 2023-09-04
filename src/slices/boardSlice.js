import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
};



const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
      localStorage.setItem('boards', JSON.stringify(action.payload));
    },
    filterBoards: (state, action) => {
      const filteredId = action.payload;
      let boards = JSON.parse(localStorage.getItem('boards'));

      // Check if a filter is applied; if not, reset the boards
      if (filteredId === null) {
        state.boards = boards;
      } else {
        // Apply the filter while keeping all the boards intact
        const filteredBoards = boards.filter(board => board._id === filteredId);
        state.boards = filteredBoards;
      }
    }
  }
});


export const { setBoards, filterBoards } = boardSlice.actions;
export default boardSlice.reducer;