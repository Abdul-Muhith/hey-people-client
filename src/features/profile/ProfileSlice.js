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

export const getOwnProfile = createAsyncThunk("user/get-own-profile", async (id, thunkAPI) => {
  try {
    return await profileService.getOwnProfile(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const updateOwnProfile = createAsyncThunk("user/profile/update-self", async (userData, thunkAPI) => {
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
        if (state.isSuccess === true) {
          const getDataFromLocalStorage = JSON.parse(localStorage.getItem("customer"));

          const newUserData = {
            _id: getDataFromLocalStorage?._id,
            token: getDataFromLocalStorage?.token,
            firstName: action.payload?.firstName,
            lastName: action.payload?.lastName,
            email: action.payload?.email,
            mobile: action.payload?.mobile
          };

          localStorage.setItem("customer", JSON.stringify(newUserData));
          state.profiles = newUserData;

          toast.success("Your Profile Successfully Updated");
        }
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