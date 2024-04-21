import { createSlice } from '@reduxjs/toolkit';

const overallProgressSlice = createSlice({
  name: 'overallProgress',
  initialState: {},
  reducers: {
    setOverallProgress: (state, action) => {
      return action.payload;
    },
  },
});

export const { setOverallProgress } = overallProgressSlice.actions;
export default overallProgressSlice.reducer;
