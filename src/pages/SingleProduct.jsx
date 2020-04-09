import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import img from "../images/page-images/images/singleProductBcg.jpeg";

function SingleProduct({ product }) {
  return (
    <>
      <Hero img={img} title="single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>Product Loading ...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-md-5">
                  <img src={image} alt="fuck" className="img img-fluid" />
                </div>
                <div className="col-md-7 d-block">
                  <h1 className="text-title mb-5">model: {title}</h1>
                  <h5 className="text-capitalize text-muted">
                    Company: {company}
                  </h5>
                  <h5 className="text-main text-capitalize">Price: {price}</h5>
                  <p className="text-lead">{description}</p>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => addToCart(id)}
                  >
                    Add To Cart
                  </button>
                  <Link to="/products" className="btn btn-warning text-white m-2">
                    Back To Products
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </>
  );
}

export default SingleProduct;
