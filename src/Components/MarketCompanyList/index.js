import React from "react";
import "./MarketList.css";

const MarketCompanyList = () => {
  return (
    <div>
      <div className="market__list">
        <div className="company__icon">Icon</div>
        <div className="company__details">
          <p className="company__symbol">
            AAPL <span>(Apple Inc)</span>
          </p>
          <p className="volume">Vol:12312322</p>
        </div>
        <div className="company__price">
          <p>$213.43</p>
          <p>-3.5%</p>
        </div>
      </div>
    </div>
  );
};

export default MarketCompanyList;
