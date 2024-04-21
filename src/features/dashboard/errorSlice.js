import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  statusCode: "",
};

const errorSlice = createSlice({
  name: "apiError",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStatusCode: (state, action) => {
      state.statusCode = action.payload;
    },
  },
});

export const { setError, setStatusCode } = errorSlice.actions;

export default errorSlice.reducer;
