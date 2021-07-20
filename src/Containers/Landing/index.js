import React from "react";
import "./Landing.css";
import headImg from "../../Assets/manhead.png";
import Bitcoin from "../../Assets/bitcoin-color.svg";
import Tata from "../../Assets/tata.svg";
import { Chip } from "@material-ui/core";

const Landing = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__heading">
          <h3>Your Trading Experience will change Completely</h3>
          <p>
            Join your favourite Tradning Community with learning and investing
          </p>
          <button>Join Now</button>
        </div>
        <div className="header__image">
          <img src={headImg} alt="head__img" />
        </div>
      </div>
      <div className="top__companies__container">
        <div className="glass__container">
          <div className="block">
            <img src={Bitcoin} alt="icon" />
            <div className="block__content">
              <p>BTC/USD</p>
              <Chip color="secondary" size="small" label="+3.3%" />
            </div>
            <div className="price__section">
              <h3>230,561</h3>
              <p>222,456</p>
            </div>
          </div>
          <div className="block">
            <img src={Tata} alt="icon" />
            <div className="block__content">
              <p>TMC/INR</p>
              <Chip color="secondary" size="small" label="+7.5%" />
            </div>
            <div className="price__section">
              <h3>3,561</h3>
              <p>2,456</p>
            </div>
          </div>
          <div className="block">
            <img src={Bitcoin} alt="icon" />
            <div className="block__content">
              <p>BTC/USD</p>
              <Chip color="secondary" size="small" label="+3.3%" />
            </div>
            <div className="price__section">
              <h3>230,561</h3>
              <p>222,456</p>
            </div>
          </div>
          <div className="block">
            <img src={Bitcoin} alt="icon" />
            <div className="block__content">
              <p>BTC/USD</p>
              <Chip color="secondary" size="small" label="+3.3%" />
            </div>
            <div className="price__section">
              <h3>230,561</h3>
              <p>222,456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
