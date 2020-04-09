import React from "react";
import { ProductConsumer } from "../context/context";
import Hero from "./Hero";
import img from "../images/page-images/images/productsBcg.jpeg";
import Title from "./AboutPage/Title";
import Product from "./Product";
import FilterProducts from "./FilterProducts";

function ProductsList(props) {
  return (
    <>
      <Hero max={false} img={img} />
      <Title title="Our Products" center={true} className="p-5" />
      <div className="container mt-5">
        <FilterProducts />
        <div className="row">
          <ProductConsumer>
            {value => {
              const { filteredProducts } = value;
              if (filteredProducts.length === 0) {
                return <h1 className="mx-auto">No Item</h1>;
              } else {
                return filteredProducts.map(item => {
                  return <Product product={item} key={item.id} />;
                });
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
