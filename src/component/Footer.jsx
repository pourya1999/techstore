import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

function Footer(props) {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-lead text-capitalize">
                    copyright &copy;tech store {new Date().getFullYear()}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.social.map(item => {
                    return (
                      <a href={item.url} key={item.id}>
                        {item.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    &:hover {
      color: var(--primaryColor);
      cursor: pointer;
    }
  }
`;

export default Footer;
