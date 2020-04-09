import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SideCartComponent({ image, id, title, count, price }) {
  return (
    <>
      <li key={id} className="cart-item mb-4">
        <img src={image} alt="item" width="35" />
        <div className="mt-3">
          <h6 className="text-uppercase" style={{ color: "red" }}>
            {title}
          </h6>
          <h6 className="text-title text-capitalize">amount: {count}</h6>
          <h6 className="text-title text-capitalize">Price: {price}</h6>
        </div>
      </li>
    </>
  );
}

export default SideCartComponent;
