import React from "react";
import styled from "styled-components";

function Title({ title, center }) {
  return (
    <TitleWrapper className="row p-3 my-2" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  margin: ${props => (props.center ? "0 auto" : "0")};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
  }
`;

export default Title;
