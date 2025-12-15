import React from "react";
import "./LandingPage.scss";
import Hero from "../../containers/Hero/Hero";
import Contact from "../../containers/Contact/Contact";
import Information from "../../containers/Information/Information";
import ParkingTip from "../../containers/ParkingTip/ParkingTip";
import Thanks from "../../containers/Thanks/Thanks";

interface ILandingPage {}

const LandingPage: React.FC<ILandingPage> = () => {
  return (
    <div className="LandingPage">
      <Hero />
      <Contact />
      <Information />
      <ParkingTip />
      <Thanks />
    </div>
  );
};

export default LandingPage;
