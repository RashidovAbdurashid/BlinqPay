import React from "react";
import person from "../assets/accessibility-outline 1.png";
import cash from "../assets/cash-outline 1.png";
import analytics from "../assets/analytics-outline 1.png";
import repered from "../assets/receipt-outline 1.png";

function Payment() {
  return (
    <section className="payment-section">
      <div className="main-container">
        <div className="cards-wrapper">
          <div className="card-column col-left">
            <div className="custom-card">
              <div className="accent-line"></div>
              <div className="icon">
                <img src={person} />
              </div>
              <h3>Easy Access</h3>
              <p>Now track all of your transaction easily.</p>
            </div>

            <div className="custom-card">
              <div className="accent-line"></div>
              <div className="icon">
                <img src={analytics} />
              </div>
              <h3>Use You Connect</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>

          <div className="card-column col-right">
            <div className="custom-card">
              <div className="accent-line"></div>
              <div className="icon">
                <img src={cash} />
              </div>
              <h3>Cashflow Visiblity</h3>
              <p>Now track all of your transaction easily.</p>
            </div>

            <div className="custom-card">
              <div className="accent-line"></div>
              <div className="icon">
                <img src={repered} />
              </div>
              <h3>Manage Invoicing</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>
        </div>

        <div className="content-side">
          <h1 className="main-title">
            Make & Share <br />
            <span className="purple-text">Payments</span> With Community
          </h1>
          <p className="description">
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <a href="https://github.com/" className="learn-more-btn">
            Learn more <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Payment;
