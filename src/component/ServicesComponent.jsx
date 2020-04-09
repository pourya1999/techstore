import React from "react";

function ServicesComponent({ icon, title, text }) {
  return (
    <div>
      <h1>{icon}</h1>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default ServicesComponent;
