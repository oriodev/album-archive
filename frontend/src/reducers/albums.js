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
  },
});

export const { set, add, del } = albumsSlice.actions;

export default albumsSlice.reducer;
