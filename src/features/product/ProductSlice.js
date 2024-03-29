import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

import productService from './ProductService';

import { toast } from 'react-toastify';

const initialState = {
  // products: [],
  // createdProduct: "", // comment class 09
  products: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const getAllProducts = createAsyncThunk("product/get-products", async (data, thunkAPI) => {
  try {
    return await productService.getAllProducts(data);
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

export const rateProduct = createAsyncThunk("product/rate-product", async (userData, thunkAPI) => {
  try {
    return await productService.rateProduct(userData);
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
      .addCase(rateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.ratedProduct = action.payload;
        state.message = "Rating added Successfully to Product";
        if (state.isSuccess === true) toast.success("Product Successfully Rated");
      })
      .addCase(rateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) toast.error("Something Went Wrong on Rating Product");
      })
      .addCase(resetState, () => initialState);
  }
});

export default productSlice.reducer;