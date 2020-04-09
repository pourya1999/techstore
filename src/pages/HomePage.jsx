import React from "react";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";
import ServicesWrapper from "../component/ServicesWrapper";
import Featured from "../component/Featured";

function HomePage(props) {
  return (
    <>
      <Hero title="Awesome Gadget" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <ServicesWrapper />
      <Featured />
    </>
  );
}

export default HomePage;
