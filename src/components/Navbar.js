import React from "react";
import NavLogo from "../assets/Logo.png";
import NavBg from "../assets/Vector 1.png";

function Navbar() {
  return (
    <section className="nav">
      <img className="navbg" src={NavBg} alt="bg" />
      <div className="navbar container">
        <img src={NavLogo} alt="logo" />
        <div className="nav_ul">
          <ul>
            <a href="https://github.com/">Products</a>
            <a href="https://github.com/">Developers</a>
            <a href="https://github.com/">Company</a>
            <a href="https://github.com/">Pricing</a>
          </ul>
        </div>
        <div className="nav__button">
          <a href="https://github.com/">Support</a>
          <button>Sign in</button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
