import React from "react";
import Header from "./Component/header/header";
import Footer from "./Component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import About from "./Pages/about/About";
import Authors from "./Pages/authors/Authors";
import Book from "./Pages/book/Books";
import "./index.css";
import Cart from "./Pages/cart/Cart";
import Login from "./Pages/forms/Login";
import Register from "./Pages/forms/Register";
import Contact from "./Pages/contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
