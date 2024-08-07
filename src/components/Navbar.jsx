import React from "react";
import { Link } from "react-router-dom";
import mainpic from "./data/img.json"

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav-items">
          <div className="nav-img">
            <ul>
              <li>
                <Link to="/">
                  <img src={`/assets/${mainpic.imgSrc}`} alt="logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/contactme">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
