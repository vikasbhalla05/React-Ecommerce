import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.js";
import Contact from './Contact.js';
import Home from "./Home.js";
import Products from './Products.js';
import Cart from './Cart.js';
import ErrorPage from './ErrorPage.jsx';
import SingleProduct from "./SingleProduct.js";
import { ThemeProvider } from "styled-components";


const App = () => {

  const theme = {
    color: "#000000",
  }

  return (
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
};

export default App;
