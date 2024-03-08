import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import cartService from './CartService';

const initialState = {
  // products: [],
  // createdProduct: "", // comment class 09
  carts: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const addProductToCart = createAsyncThunk("cart/create-new-cart", async (cartData, thunkAPI) => {
    try {
      return await cartService.addProductToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserAllOwnCarts = createAsyncThunk("cart/get-all-own-carts", async (thunkAPI) => {
  try {
    return await cartService.getUserAllOwnCarts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getAllOwncarts = createAsyncThunk("cart/get-all-own-carts", async (thunkAPI) => {
  try {
    return await cartService.getAllOwnWishlists();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCart = action.payload;
        state.message = "new Cart Added Successfully";
        if (state.isSuccess) toast.success("Product Added to Cart Successfully");
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getUserAllOwnCarts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAllOwnCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userAllOwnCarts = action.payload;
        state.message = "Here are loggedIn User's all Own Carts";
      })
      .addCase(getUserAllOwnCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      // .addCase(getAllOwnWishlists.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getAllOwnWishlists.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.allOwnWishlists = action.payload;
      //   state.message = "Here are all Own Wishlists";
      // })
      // .addCase(getAllOwnWishlists.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.message = action.error;
      // })
      .addCase(resetState, () => initialState);
  }
});

export default cartSlice.reducer;