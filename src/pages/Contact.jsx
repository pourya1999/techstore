import React, { Component } from "react";
import Hero from "../component/Hero";
import contactImg from "../images/page-images/images/contactBcg.jpeg";
import ContactComponent from "../component/ContactComponent";

class Contact extends Component {
  render() {
    return (
      <>
        <Hero max={false} img={contactImg} />
        <ContactComponent />
      </>
    );
  }
}

export default Contact;
