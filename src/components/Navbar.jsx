import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav-items">Portfolio</div>
        <div className="right">
          <a href="home" className="nav-items">Home</a>
          <a href="about" className="nav-items">About</a>
          <a href="blog" className="nav-items">Blog</a>
          <a href="#projects" className="nav-items">Projects</a>
          <a href="#contact" className="nav-items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
