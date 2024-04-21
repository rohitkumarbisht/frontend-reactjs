import { configureStore } from "@reduxjs/toolkit";
import overallProgressReducer from "../features/dashboard/overallProgressSlice";
import assessmentWiseReducer from "../features/dashboard/assessmentWiseSlice";
import loadingReducer from "../features/dashboard/loadingSlice";
import teacherDataReducer from "../features/dashboard/teacherDataSlice";
import errorReducer from "../features/dashboard/errorSlice";

const store = configureStore({
  reducer: {
    overallProgress: overallProgressReducer,
    assessmentWise: assessmentWiseReducer,
    loading: loadingReducer,
    teacherData:teacherDataReducer,
    apiError:errorReducer,
  },
});

export default store;
