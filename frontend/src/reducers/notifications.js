import { createSlice } from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
  name: 'notification',
  initialState: { value: { on: false, message: null } },
  reducers: {
    setOn: (state, action) => {
      state.value = { ...state.value, on: action.payload };
    },
    setMessage: (state, action) => {
      state.value = { ...state.value, message: action.payload };
    },
  },
});

export const { setOn, setMessage } = notificationsSlice.actions;

export default notificationsSlice.reducer;
