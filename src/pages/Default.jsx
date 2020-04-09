import React from "react";
import styled from "styled-components";
import defaultBcg from "../images/page-images/images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";

function Default(props) {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">Not Found</h2>
        <Link to="/" className="main-link my-2">
          Return Home
        </Link>
      </Hero>
    </>
  );
}

export default Default;
