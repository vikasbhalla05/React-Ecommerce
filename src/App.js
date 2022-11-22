import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./About.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import ErrorPage from "./ErrorPage.jsx";
import SingleProduct from "./SingleProduct.js";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer.jsx";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
  );
};

export default App;
