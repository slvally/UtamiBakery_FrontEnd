import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Catalog from './pages/Catalog/Catalog';
import Blog from './pages/Blog/Blog';
import Company from './pages/Company/Company';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import CartList from './pages/CartList/CartList';
import Profile from './pages/Profile/Profile';
import Test from './pages/Test/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/katalog/:id" element={<ProductDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/carts" element={<CartList />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
