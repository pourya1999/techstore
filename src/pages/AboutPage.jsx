import React from "react";
import Info from "../component/AboutPage/Info";
import Hero from "../component/Hero";
import aboutBcg from "../images/page-images/images/aboutBcg.jpeg";

function AboutPage(props) {
  return (
    <div>
      <Hero title="About Page" img={aboutBcg} max="false" />
      <Info />
    </div>
  );
}

export default AboutPage;
