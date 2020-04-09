import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideCartComponent from "./SIdeCartComponent";

function SideCart(props) {
  return (
    <ProductConsumer>
      {value => {
        const { closeCart, cartOpen, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <div className="container mb-5">
              {cart.map(item => {
                return (
                  <ul>
                    <SideCartComponent
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      count={item.count}
                      price={item.price}
                    />
                  </ul>
                );
              })}
              <h4 className="text-lead">Total: {cartTotal}</h4>
              <Link to="/cart" className="btn btn-danger">
                Go To Cart
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
    li {
      list-style-type: none;
    }
  }
`;

export default SideCart;
