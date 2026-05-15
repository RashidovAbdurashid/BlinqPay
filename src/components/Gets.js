import React from "react";
import phone from "../assets/tablet.png";
import people from "../assets/people.png";
import humans from "../assets/humans.png";
import vector from "../assets/Vector 3.png";

function Gets() {
  return (
    <section className="gets">
      <div className="gets__container container">
        <img className="vector" src={vector} alt="Gets" />
        <div className="gets__content">
          <div className="content">
            <h4>CREDIT CARD</h4>
            <h1 className="title">Payment</h1>
            <h1 className="subtitle">Gets Easier</h1>
            <p>
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              adipiscing inwidunt sed in. Nunc, sed sed d
            </p>
            <a href="#" className="learn-more-btn">
              Learn more <span className="arrow-icon">→</span>
            </a>
          </div>

          <div className="image">
            <img src={phone} alt="Gets" />
          </div>
        </div>
        <div className="gets__content">
          <div className="image">
            <img src={people} alt="Gets" />
          </div>
          <div className="content">
            <h4>MOBILE TRANSACTION</h4>
            <h1 className="title">Smart Mobile</h1>
            <h1 className="subtitle">Banking</h1>
            <p>
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              adipiscing inwidunt sed in. Nunc, sed sed d
            </p>
            <a href="#" className="learn-more-btn">
              Learn more <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
        <div className="gets__content">
          <div className="content">
            <h4>CREDIT CARD</h4>
            <h1 className="title">Safe Yours</h1>
            <h1 className="subtitle">Savings</h1>
            <p>
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              adipiscing inwidunt sed in. Nunc, sed sed d
            </p>
            <a href="#" className="learn-more-btn">
              Learn more <span className="arrow-icon">→</span>
            </a>
          </div>

          <div className="image">
            <img src={humans} alt="Gets" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gets;
