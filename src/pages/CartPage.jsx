import React from "react";
import CartList from "../component/CartPage/CartList";
import Hero from "../component/Hero";
import img from "../images/page-images/images/defaultBcg.jpeg";
import Title from "../component/AboutPage/Title";
import CartTotals from "../component/CartPage/CartTotal";
import ShopList from "../component/ShopList";

function CartPage(props) {
  return (
    <div>
      <Hero img={img} />
      <Title title="Your Cart Item" center={true} />
      <ShopList />
      <CartTotals />
    </div>
  );
}

export default CartPage;
