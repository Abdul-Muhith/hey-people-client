import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

import productService from './ProductService';

const initialState = {
  // products: [],
  // createdProduct: "", // comment class 09
  products: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const getAllProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
  try {
    return await productService.getAllProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getSingleProduct = createAsyncThunk("product/get-single-product", async (id, thunkAPI) => {
  try {
    return await productService.getSingleProduct(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.message = "Here are all products";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.products = null;
        state.message = action.error;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
        state.message = "Single Product Fetched Successfully";
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  }
});

export default productSlice.reducer;