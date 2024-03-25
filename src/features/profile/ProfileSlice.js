import { createSlice, createAsyncThunk,createAction } from '@reduxjs/toolkit';

import profileService from './ProfileService';

import { toast } from 'react-toastify';

const initialState = {
  profiles: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const getProducts = createAsyncThunk("user/get-profiles", async (thunkAPI) => {
  try {
    return await profileService.getProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createProducts = createAsyncThunk("user/create-profiles", async (userData, thunkAPI) => {
    try {
      return await profileService.createProduct(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOwnProfile = createAsyncThunk("user/get-own-profile", async (id, thunkAPI) => {
  try {
    return await profileService.getOwnProfile(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateOwnProfile = createAsyncThunk("user/profile/update-self", async (userData, thunkAPI) => {
  try {
    return await profileService.updateOwnProfile(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getProducts.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getProducts.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.products = action.payload;
      //   state.message = "success";
      // })
      // .addCase(getProducts.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.products = null;
      //   state.message = action.error;
      // })
      // .addCase(createProducts.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(createProducts.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.createdProduct = action.payload;
      // })
      // .addCase(createProducts.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.isSuccess = false;
      //   state.message = action.error;
      // })
      .addCase(getOwnProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOwnProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.ownProfile = action.payload;
      })
      .addCase(getOwnProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateOwnProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOwnProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedProfile = action.payload;
        state.message = "Profile Successfully Updated";
        if (state.isSuccess === true) toast("Your Profile Successfully Updated");
      })
      .addCase(updateOwnProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  }
});

export default profileSlice.reducer;