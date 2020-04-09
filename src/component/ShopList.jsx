import React from "react";
import { ProductConsumer } from "../context/context";
import {
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaTrashAlt
} from "react-icons/all";

function ShopList(props) {
  return (
    <>
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Name Of Product</th>
              <th>Price</th>
              <th>Count</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <ProductConsumer>
              {value => {
                const { removeItem, increment, decrement } = value;
                return value.cart.map(item => {
                  return (
                    <tr key={item.id}>
                      <th>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />
                      </th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <div className="d-flex text-center justify-content-around align-items-center">
                          <FaArrowCircleUp
                            className="add-icon"
                            onClick={() => increment(item.id)}
                          />
                          <span>{item.count}</span>
                          <FaArrowCircleDown
                            className="add-icon"
                            onClick={() => decrement(item.id)}
                          />
                        </div>
                      </td>
                      <td>
                        <FaTrashAlt
                          className="remove-icon"
                          onClick={() => removeItem(item.id)}
                        />
                      </td>
                      <td>{item.count * item.price}</td>
                    </tr>
                  );
                });
              }}
            </ProductConsumer>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShopList;
