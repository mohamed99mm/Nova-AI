// components/WhatWeDo.js
import React from 'react';

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="tm-section-pad-top">
      <div className="container">
        <div className="row tm-content-box">
          <div className="col-lg-12 col-xl-12">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4 tm-section-title">What We Do</h2>
              <p className="mb-4 tm-intro-text">
                We provide Intelligent and Technological solutions with competitive prices and great quality 
              </p>
            </div>
          </div>
        </div>

        <div className="row tm-content-box">
          <div className="col-lg-1">
            <i className="far fa-3x fa-lightbulb text-center tm-icon"></i>
          </div>
          <div className="col-lg-5">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4">AI Training</h2>
              <p className="mb-4 tm-intro-text">
                We provide AI training for kids, youth, undergraduate students, and post-graduates.
              </p>
            </div>
            <div className="tm-continue">
              <a href="#testimonials" className="tm-intro-text tm-btn-primary">Learn More</a>
            </div>
          </div>
          
          <div className="col-lg-1">
            <i className="fas fa-3x fa-code text-center tm-icon"></i>
          </div>
          <div className="col-lg-5">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4">Software and Applications</h2>
              <p className="mb-4 tm-intro-text">
                We provide Software and Web Application development
              </p>
            </div>
            <div className="tm-continue">
              <a href="#testimonials" className="tm-intro-text tm-btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="row tm-content-box">
          <div className="col-lg-1">
            <i className="fas fa-3x fa-brain text-center tm-icon"></i>
          </div>
          <div className="col-lg-5">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4">AI Solutions</h2>
              <p className="mb-4 tm-intro-text">
                We provide AI-Solutions for Natural Language processing, Computer Vision, Data Analysis and Customizable Intelligent chatbots for customer service and inquiries.
              </p>
              <div className="tm-continue">
                <a href="#testimonials" className="tm-intro-text tm-btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-1">
            <i className="fas fa-3x fa-users text-center tm-icon"></i>
          </div>
          <div className="col-lg-5">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4">Advertisement with AI (Soon)</h2>
              <p className="mb-4 tm-intro-text">
                We are building a team for Advertisements using AI in order to enter a new world of Advertisement
              </p>
              <div className="tm-continue">
                <a href="#testimonials" className="tm-intro-text tm-btn-primary">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;