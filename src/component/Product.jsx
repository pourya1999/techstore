import React from "react";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/all";
import styled from "styled-components";

function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  alt="Pose"
                  className="card-img-top p-5"
                  style={{ height: "350px" }}
                />
                <div className="product-icon">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-mail">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    &:hover {
      box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.3;
  }
  .image-container {
    position: relative;
  }
  .product-icon {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--mainWhite);
    background: var(--mainBlack);
    border-radius: 30%;
    display: none;
  }

  .card:hover .icon {
    display: inline-block;
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
`;

export default Product;
