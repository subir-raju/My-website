import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav-items">SUBIR'S PAGE</div>
        <div className="right">
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Blog</li>
          <li className="nav-items">Projects</li>
          <li className="nav-items">Contact</li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
