import React, { Component } from "react";
import { servicesData } from "../context/ServicesData";

class State extends Component {
  state = {
    data: servicesData
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.state.data.map(item => {
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
      </>
    );
  }
}

export default State;
