import { createSlice } from '@reduxjs/toolkit';

export const albumsSlice = createSlice({
  name: 'albums',
  initialState: { value: [] },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    add: (state, action) => {
      state.value.push(action.payload);
    },
    del: (state, action) => {
      state.value = state.value.filter(
        (album) => album.album_id !== action.payload
      );
    },
    edit: (state, action) => {
      state.value = state.value.map((album) => {
        if (album.album_id === action.payload.album_id) {
          return action.payload;
        } else {
          return album;
        }
      });
    },
  },
});

export const { set, add, del, edit } = albumsSlice.actions;

export default albumsSlice.reducer;
