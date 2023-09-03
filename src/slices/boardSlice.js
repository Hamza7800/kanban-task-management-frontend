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
    }
  }
});


export const { setBoards } = boardSlice.actions;
export default boardSlice.reducer;