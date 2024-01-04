import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;