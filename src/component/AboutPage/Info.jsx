import React from "react";
import Title from "./Title";
import aboutBcg from "../../images/page-images/images/aboutBcg.jpeg";

function Info(props) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3">
            <img
              src={aboutBcg}
              alt="about us"
              className="img img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 col-md-6 mx-auto my-3">
            <Title title="about us" center={true} />
            <p className="text-lead text-muted my-3">
              lorem lorem fuck you all lorem lorem fuck you all lorem lorem fuck
              you all
            </p>
            <p className="text-lead text-muted my-3">
              lorem lorem fuck you all lorem lorem fuck you all lorem lorem fuck
              you all
            </p>
            <button className="main-link">More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
