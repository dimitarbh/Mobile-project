import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="container">
        <div className="row gx-4 align-items-center justify-content-between">
          <div className="col-md-5 order-2 order-md-1">
            <div className="mt-5 mt-md-0">
              <span className="text-muted">Our Story</span>
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
              </p>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, odit.
              </p>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 order-1 order-md-2">
            <div className="row gx-2 gx-lg-3">
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt="About us 1" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt="About us 2" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt="About us 3" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt="About us 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
