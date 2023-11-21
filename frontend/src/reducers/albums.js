import { createSlice } from '@reduxjs/toolkit';

export const albumsSlice = createSlice({
  name: 'albums',
  initialState: { value: [] },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = albumsSlice.actions;

export default albumsSlice.reducer;
