import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/all";

const Social = [
  {
    id: 1,
    icon: <FaFacebook className="icon" />,
    url: "https://faceboook.com"
  },
  {
    id: 2,
    icon: <FaTwitter className="icon" />,
    url: "https://twitter.com"
  },
  { id: 3, icon: <FaLinkedin className="icon" />, url: "https://linkedin.com" }
];

export { Social };
