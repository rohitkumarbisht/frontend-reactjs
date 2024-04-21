import { createSlice } from '@reduxjs/toolkit';

const teacherDataSlice = createSlice({
  name: 'teacherData',
  initialState: {},
  reducers: {
    setTeacherData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTeacherData } =  teacherDataSlice.actions;
export default teacherDataSlice.reducer;
