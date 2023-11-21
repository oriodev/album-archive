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
  },
});

export const { set, add } = albumsSlice.actions;

export default albumsSlice.reducer;
