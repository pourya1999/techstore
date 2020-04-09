import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import Default from "./pages/Default";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import SideCart from "./component/SideCart";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
