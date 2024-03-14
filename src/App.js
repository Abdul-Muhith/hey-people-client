import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import CompareProduct from './pages/Product/CompareProduct';
import Wishlist from './pages/Product/Wishlist';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import SingleBlog from './pages/Blog/SingleBlog';
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy';
import RefoundPolicy from './pages/Privacy/RefoundPolicy';
import ShippingPolicy from './pages/Privacy/ShippingPolicy';
import TermsAndConditions from './pages/Privacy/TermsAndConditions';
import SingleProduct from './pages/Product/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';

import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';

function App() {
  return (
    // <h1>Hello from APP</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='our-store' element={<OurStore />} />
          <Route path='blogs' element={<Blog />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<PrivateRoutes><Wishlist /></PrivateRoutes>} />
          <Route path='account/login' element={<OpenRoutes><Login /></OpenRoutes>} />
          <Route path='account/forgot-password' element={<ForgotPassword />} />
          <Route path='account/signup' element={<OpenRoutes><Signup /></OpenRoutes>} />
          <Route path='account/reset-password' element={<ResetPassword />} />
          <Route path='blogs/:id' element={<SingleBlog />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refound-policy' element={<RefoundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='terms-conditions' element={<TermsAndConditions />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} />
          <Route path='checkout' element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
          <Route path='my-orders' element={<PrivateRoutes><Orders /></PrivateRoutes>} />
          <Route path='my-profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;