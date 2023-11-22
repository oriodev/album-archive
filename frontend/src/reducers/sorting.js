import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: { value: 'highToLow' },
  reducers: {
    setSort: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSort } = sortingSlice.actions;

export default sortingSlice.reducer;
