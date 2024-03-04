import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

import wishlistService from './WishlistService';

const initialState = {
  // products: [],
  // createdProduct: "", // comment class 09
  wishlists: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const addProductToWishlist = createAsyncThunk("wishlist/add-product-to-wishlist", async (id, thunkAPI) => {
    try {
      return await wishlistService.addProductToWishlist(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllOwnWishlists = createAsyncThunk("wishlist/get-all-own-wishlists", async (thunkAPI) => {
  try {
    return await wishlistService.getAllOwnWishlists();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

export const wishlistSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // TODO: last time of class 04
      .addCase(addProductToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.recentWishlistProducts = action.payload;
        state.message = "Product Added to Wishlist";
      })
      .addCase(addProductToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getAllOwnWishlists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOwnWishlists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allOwnWishlists = action.payload;
        state.message = "Here are all Own Wishlists";
      })
      .addCase(getAllOwnWishlists.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  }
});

export default wishlistSlice.reducer;