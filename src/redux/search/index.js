import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fetching: false,
  term: 'bitcoin',
  page: 1
};

export const postSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    loadPostRequest: (state, action) => {
      state.fetching = true;
    },
    loadPostSuccess: (state, action) => {
      state.fetching = false;
      state.posts = action.payload;
    },
    loadPostFail: (state) => {
      state.fetching = false;
    },
    setSearchTerm: (state, action) => {
      state.term = action.payload
    },
    nextPage: (state) => {
      state.page += 1
    },
    loadMoreDateRequest: (state, action) => {
      state.fetching = true
    },
    loadMoreDateSuccess: (state, action) => {
      state.posts = [...state.posts, ...action.payload]
      state.fetching = false

    }
  },
});

export const { loadPostRequest, loadPostSuccess, loadPostFail, setSearchTerm, nextPage, loadMoreDateRequest, loadMoreDateSuccess } =
  postSlice.actions;

export default postSlice.reducer;
