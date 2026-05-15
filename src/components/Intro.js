import React from "react";
import IntroBg from "../assets/image 6.png";
import IntroBg2 from "../assets/image 7.png";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container container">
        <div className="intro__left">
          <h1>Get Your Payment Faster</h1>
          <p>
            Blinqpay helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <button>Start Now</button>
        </div>

        <div className="intro__right">
          <img className="intro__img" src={IntroBg} alt="intro" />
          <img className="intro__mini" src={IntroBg2} alt="intro2" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
