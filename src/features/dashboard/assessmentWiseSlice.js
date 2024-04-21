import { createSlice } from '@reduxjs/toolkit';

const assessmentWiseSlice = createSlice({
  name: 'assessmentWise',
  initialState: {},
  reducers: {
    setAssessmentWiseData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAssessmentWiseData } = assessmentWiseSlice.actions;
export default assessmentWiseSlice.reducer;
