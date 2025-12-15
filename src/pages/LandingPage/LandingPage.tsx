import React from "react";
import "./LandingPage.scss";
import Hero from "../../containers/Hero/Hero";
import Contact from "../../containers/Contact/Contact";

interface ILandingPage {}

const LandingPage: React.FC<ILandingPage> = () => {
  return (
    <div className="LandingPage">
      <Hero />
      <Contact />
    </div>
  );
};

export default LandingPage;
