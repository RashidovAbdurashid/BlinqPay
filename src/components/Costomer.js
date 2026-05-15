import React from "react";
import Group from "../assets/Group 430.png";
import BG from "../assets/Rectangle 5 (1).png";

function Costomer() {
  return (
    <section className="costomer">
      <div className="costomer__container container">
        <img src={BG} alt="group" className="costomer__vector" />
        <div className="costomer__content">
          <h2 className="costomer__title">
            What Our <span>Customer</span> Are saying
          </h2>
          <p className="costomer__text">
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            lacus a, interdum nulla sem adipiscing inw
          </p>
        </div>

        <div className="costomer__images">
          <img src={Group} alt="group" />
        </div>
      </div>
    </section>
  );
}

export default Costomer;
