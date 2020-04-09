import React from "react";
import styled from "styled-components";
import ServicesComponent from "./ServicesComponent";
import { Fa500Px, FaFantasyFlightGames, FaShippingFast } from "react-icons/all";

function ServicesWrapper() {
  return (
    <>
      <ServiceWrapper>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <ServicesComponent
                icon={<Fa500Px className="icons" />}
                title="Free Shipping"
                text="2.8GHz quad‑core 8th‑generation Intel Core i7 processor, Turbo Boost up to 4.7GHz"
              />
            </div>
            <div className="col-md-4 text-center">
              <ServicesComponent
                icon={<FaShippingFast className="icons" />}
                title="30 Days return policy"
                text="2.8GHz quad‑core 8th‑generation ans Intel Core i7 processor, Turbo Boost up to 4.7GHz"
              />
            </div>
            <div className="col-md-4 text-center">
              <ServicesComponent
                icon={<FaFantasyFlightGames className="icons" />}
                title="Secured Payment"
                text="2.8GHz quad‑core 8th‑generation Intel Core i7 processorfd, Turbo Boost up to 4.7GHz"
              />
            </div>
          </div>
        </div>
      </ServiceWrapper>
    </>
  );
}

const ServiceWrapper = styled.div`
  background: var(--primaryColor);
  .icons {
    color: var(--mainBlack);
  }
`;

export default ServicesWrapper;
