import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/AuthSlice';
import productReducer from '../features/product/ProductSlice';
import wishlistReducer from '../features/wishlist/WishlistSlice';
import blogReducer from '../features/blog/BlogSlice';

// export const store = configureStore({
//   reducer: {},
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    blog: blogReducer,
  },
});