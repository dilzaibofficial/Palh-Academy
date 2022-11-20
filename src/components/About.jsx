import React from "react";

const About = () => {
  return (
    <React.StrictMode>
      <div className="intro-page" id="aboutpage">
        <h1>About</h1>
      </div>
      <div className="about_page">
        <div className="about_intro">
          <h1>Our Vision</h1>
          <p>
            Our vision and mission is to empower PAKISTAN through technology.
            I.T. when rightly employed leads to productivity improvements and
            prosperity at individual, organizational, societal, National and
            Global level.
          </p>
          <p>
            APTECH has embarked on a business excellence initiative and is
            investing in developing competencies to deliver superior quality
            with total customer orientation.
          </p>
          <p>
            Our Customer Policy is a simple one, Anticipate and exceed customer
            expectations through effective and timely delivery of industry
            relevant products and services.
          </p>
        </div>
        <div className="about-cir">
          <img src={require("../images/certificate.png")} alt="certificate" />
        </div>
      </div>
      <div className="why_palh">
        <div className="why_palh_intro">
          <h1>Why Palh Academy?</h1>
          <p>Aptech is the pioneer in IT education & training since 1986. </p>
          <p>
            We have helped build the careers of 68 lakh professionals in 40
            countries.
          </p>
          <p>
            Aptech prepares students to be a part of this growing industry
            through its courses and various placement assistance activities.
          </p>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default About;
