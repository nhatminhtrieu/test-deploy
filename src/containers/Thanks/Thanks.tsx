import React from "react";
import "./Thanks.scss";

interface IThanks {}

const Thanks: React.FC<IThanks> = () => {
  return (
    <div className="Thanks">
      <div className="title-group">
        <div className="graduation-label font-tertiary">See ya</div>
        <div className="name-label font-secondary">
          I'm looking forward to out best memories ^^
        </div>
      </div>
      <div className="credit">
        <div className="credit-label">
            @2025 - lamthanhngoc&trieunhatminh
        </div>
      </div>
    </div>
  );
};

export default Thanks;
