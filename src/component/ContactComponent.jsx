import React from "react";
import Title from "./AboutPage/Title";

function ContactComponent(props) {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact Us" />
          <form
            action="https://formspree.io/yshncttt@gmail.com"
            method="POST"
            className="mt-5"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Enter Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Write Your Message"
              />
            </div>
          </form>
          <div className="form-group mt-4">
            <input
              type="submit"
              value="Send"
              className="form-control bg-dark text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
