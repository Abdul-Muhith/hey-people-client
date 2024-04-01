import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from './AuthService';

import { toast } from 'react-toastify';

const getCustomerFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

const initialState = {
  // user: "",
  // LECTURE 07
  user: getCustomerFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

// export const userRegistration = createAsyncThunk("auth/user-registration", async (thunkAPI) => {
//   try {

//   } catch (error) {

//   }
// });

export const userRegistration = createAsyncThunk("auth/user-registration", async (userData, thunkAPI) => {
  try {
    return await authService.userRegistration(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userLogin = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    return await authService.userLogin(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const forgotPasswordToken = createAsyncThunk("auth/forgot-password-token", async (userData, thunkAPI) => {
  try {
    return await authService.forgotPasswordToken(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetOwnPasswordByToken = createAsyncThunk("auth/reset-password", async (userData, thunkAPI) => {
  try {
    return await authService.resetOwnPasswordByToken(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// TODO: should be delete when other setup is completed
// export const authSlice = createSlice({
//   name: "auth",
//   initialState: "",
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase()
//   }
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.registeredUser = action.payload;
        state.message = "User Successfully Registered";
        if (state.isSuccess === true) toast("User Successfully Registered");
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
        // if (state.isError === true) toast(action.error.message);
        // if (state.isError === true) toast(action.error);
        if (state.isError === true) toast(action.payload.response.data.message);
      })
      // LECTURE 03
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loggedInUser = action.payload;
        state.message = "User LogIn Successful";
        if (state.isSuccess === true) {
          localStorage.setItem('token', action.payload.token);
          toast.info("User LogIn Successful");
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
        // if (state.isError === true) toast(action.error.message);
        // if (state.isError === true) toast(action.error);
        if (state.isError === true) toast(action.payload.response.data.message);
      })
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.forgotPasswordToken = action.payload;
        state.message = "Forgot Password Mail Successfully Sent";
        if (state.isSuccess === true) toast.info("Forgot Password Mail Successfully Sent");
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
        // if (state.isError === true) toast(action.error.message);
        if (state.isError === true) toast(action.error);
      })
      .addCase(resetOwnPasswordByToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetOwnPasswordByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newPassword = action.payload;
        state.message = "Password Reset Successfully";
        if (state.isSuccess === true) toast.success("Password Reset Successfully");
      })
      .addCase(resetOwnPasswordByToken.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
        if (state.isError === true) toast.error(action.error);
      })
  }
});

export default authSlice.reducer;