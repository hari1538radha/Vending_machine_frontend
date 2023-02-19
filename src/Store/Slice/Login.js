import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axio } from "../../Components/axios/Config.js";

export const Login = createAsyncThunk("login", async (data) => {
  console.log(data);
  return axio.post(`/api/login`,data);
});

const LoginData = createSlice({
  name: "login",
  initialState: {
    LoginData: [],
    LoginLoading: true,
  },
  extraReducers: {
    [Login.pending]: (state, action) => {
      state.LoginLoading = true;
    },
    [Login.fulfilled]: (state, action) => {
      state.LoginLoading = false;
      state.LoginData = action.payload;
    },
    [Login.rejected]: (state, action) => {
      state.LoginLoading = true;
    },
  },
});

const LoginDetails = LoginData.reducer;
export default LoginDetails;
