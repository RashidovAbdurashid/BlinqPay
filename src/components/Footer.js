import React from "react";
import logo from "../assets/Logo.png";
import instagram from "../assets/Vector.png";
import twitter from "../assets/Twitter.png";
import linkedin from "../assets/Linkedin In.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-left">
          <img src={logo} alt="logo" className="logo" />

          <div className="social-icons">
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
          </div>

          <p className="copyright">
            © Copy Right 2021.
            <br />
            All rights reserved
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Design</li>
            <li>Coding</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Digital Marketing</li>
            <li>Product Design</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Product</h3>

          <ul>
            <li>Hotel Management</li>
            <li>Rent Management</li>
            <li>Micro-Finance</li>
            <li>Industry</li>
            <li>Dhoko</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li>Las Vegas</li>
            <li>New York</li>
            <li>Tokyo</li>
            <li>Paris</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
