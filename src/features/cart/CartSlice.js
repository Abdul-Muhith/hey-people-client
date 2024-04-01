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

export const removeProductFromOwnCart = createAsyncThunk("cart/remove-product-from-own-cart", async (cartItemId, thunkAPI) => {
  try {
    return await cartService.removeProductFromOwnCart(cartItemId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateProductQuantityFromOwnCart = createAsyncThunk("cart/update-own-product-quantity", async (cartItem, thunkAPI) => {
  try {
    return await cartService.updateProductQuantityFromOwnCart(cartItem);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteOwnCart = createAsyncThunk("cart/empty-own-cart", async (thunkAPI) => {
  try {
    return await cartService.deleteOwnCart();
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
      .addCase(removeProductFromOwnCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductFromOwnCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedProduct = action.payload;
        state.message = "Product Deleted From Your Cart Successfully";
        if (state.isSuccess) toast.success("Product Deleted From Your Cart Successfully");
      })
      .addCase(removeProductFromOwnCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) toast.error("Something went Wrong with Delete Product !");
      })
      .addCase(updateProductQuantityFromOwnCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductQuantityFromOwnCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updetedProductQuantity = action.payload;
        state.message = "Product Quantity Updated Successfully";
        if (state.isSuccess) toast.success("Product Quantity Updated Successfully");
      })
      .addCase(updateProductQuantityFromOwnCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) toast.error("Something went Wrong with Product Quantity Update !");
      })
      .addCase(deleteOwnCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOwnCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCart = action.payload;
        state.message = "Cart Deleted Successfully";
        if (state.isSuccess) toast.success("Cart Deleted Successfully");
      })
      .addCase(deleteOwnCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        // if (state.isError) toast.error("Something went Wrong with Cart Deleted!");
        if (state.isError) toast.error(action.payload?.data?.message);
      })
      .addCase(resetState, () => initialState);
  }
});

export default cartSlice.reducer;