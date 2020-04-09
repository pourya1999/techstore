import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
import Title from "./AboutPage/Title";

class Featured extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="Featured Products" center={true} />
          <div className="row">
            <ProductConsumer>
              {value => {
                const { featuredProducts } = value;
                return featuredProducts.map(item => {
                  return <Product key={item.id} product={item} />;
                });
              }}
            </ProductConsumer>
          </div>
          <div className="row m-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                Our products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
