import React from "react";
import { ProductConsumer } from "../context/context";

function Fucker() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="container">
            <div className="row">
              {value.servicesData.map(item => {
                return (
                  <div className="col-md-4">
                    <h1>{item.icon}</h1>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default Fucker;
