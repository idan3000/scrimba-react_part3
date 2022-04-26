import React from "react";

import img from "../images/trollFace.svg";

const NavBar = () => {
  return (
    <nav className="header">
      <img src={img} alt="trollFace" className="header--image" />
      <span className="header--title">Meme Generator</span>
      <span className="header--project">React Course - Project 3</span>
    </nav>
  );
};

export default NavBar;
