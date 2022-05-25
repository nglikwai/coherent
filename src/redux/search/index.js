import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fetching: false,
};

export const tutorSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTutorRequest: (state) => {
      state.fetching = true;
    },
    searchTutorSuccess: (state, action) => {
      state.fetching = false;
      state.posts = action.payload;
    },
    searchTutorFail: (state) => {
      state.fetching = false;
    },
  },
});

export const { searchTutorRequest, searchTutorSuccess, searchTutorFail } =
  tutorSlice.actions;

export default tutorSlice.reducer;
