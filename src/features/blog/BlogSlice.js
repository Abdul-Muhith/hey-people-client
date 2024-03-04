import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

import blogService from './BlogService';

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

// TODO: FOLLOWING ADMIN PANEL

export const getAllBlogs = createAsyncThunk("blog/get-all-blogs", async (thunkAPI) => {
  try {
    return await blogService.getAllBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getSingleBlog = createAsyncThunk("blog/get-single-blog", async (id, thunkAPI) => {
  try {
    return await blogService.getSingleBlog(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createBlog = createAsyncThunk("blog/create-blogs", async (blogData, thunkAPI) => {
    try {
      return await blogService.createBlog(blogData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBlog = createAsyncThunk("blog/delete-blog", async (id, thunkAPI) => {
  try {
    return await blogService.deleteBlog(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateBlog = createAsyncThunk("blog/update-blog", async (blogData, thunkAPI) => {
  try {
    return await blogService.updateBlog(blogData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        state.message = "success";
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
        state.message = "Single Blog is here!";
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.blogs = null;
        state.message = action.error;
      })
      // .addCase(createBlog.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(createBlog.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.createdBlog = action.payload;
      //   state.message = "success";
      // })
      // .addCase(createBlog.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.blogs = null;
      //   state.message = action.error;
      // })
      // // TODO: class 15
      // .addCase(updateBlog.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateBlog.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.updatedBlog = action.payload;
      //   state.message = "success";
      // })
      // .addCase(updateBlog.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.blogs = null;
      //   state.message = action.error;
      // })
      // // TODO: class 15
      // .addCase(deleteBlog.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteBlog.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.deletedBlog = action.payload;
      //   state.message = "success";
      // })
      // .addCase(deleteBlog.rejected, (state, action) => {
      //   state.isError = true;
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.blogs = null;
      //   state.message = action.error;
      // })
      .addCase(resetState, () => initialState);
  }
});

export default blogSlice.reducer;