import React from "react";
import "./Hero.scss";

interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <div className="Hero">
      <div className="title-group">
        <div className="invitation-label">Sincerely Invites Y'all To</div>
        <div className="name-label font-secondary">LAMTHANHNGOC's</div>
        <div className="graduation-label font-tertiary">Graduation</div>
      </div>
    </div>
  );
};

export default Hero;
