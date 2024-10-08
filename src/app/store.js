import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/AuthSlice';
import productReducer from '../features/product/ProductSlice';
import wishlistReducer from '../features/wishlist/WishlistSlice';
import blogReducer from '../features/blog/BlogSlice';
import contactReducer from '../features/contact/ContactSlice';
import cartReducer from '../features/cart/CartSlice';
import orderReducer from '../features/orders/OrdersSlice';
import profileReducer from '../features/profile/ProfileSlice';

// export const store = configureStore({
//   reducer: {},
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    blog: blogReducer,
    contact: contactReducer,
    cart: cartReducer,
    order: orderReducer,
    profile: profileReducer,
  },
});