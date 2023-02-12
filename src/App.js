import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthWrapper from "./pages/AuthWrapper";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Error,
  Products,
  Cart,
  Checkout,
  Home,
  PrivateRoute,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" exact element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
