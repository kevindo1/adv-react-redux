import { createSlice } from '@reduxjs/toolkit';

const initialCount = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCount,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
