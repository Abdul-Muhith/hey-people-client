import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from './AuthService';

const initialState = {
  // user: getUserFromLocalStorage,
  // LECTURE 07
  user: "",
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

// export const login = createAsyncThunk("auth/admin-login", async (user, thunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });


// // TODO: should be delete when other setup is completed
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
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
      })
    // TODO: move to order slice
      // LECTURE 07
      // .addCase(getOrders.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getOrders.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.orders = action.payload;
      //   state.message = "success";
      // })
      // .addCase(getOrders.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.orders = null;
      //   state.message = action.error;
      // })
  }
});

export default authSlice.reducer;
