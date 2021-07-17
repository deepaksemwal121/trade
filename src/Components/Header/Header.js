import React from "react";
import "./Header.css";
import NotBell from "../../Assets/notification.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="main__container">
      <div className="brand__box">
        <h2 className="brand__name">Trade IN </h2>
      </div>
      <div className="nav__menu">
        <ul>
          <li>Exchange</li>
          <li>Market</li>
          <li>Community</li>
          <li>Discover</li>
        </ul>
      </div>
      <div className="nav__user">
        <Link to="/login">
          <button className="signup__btn">Sign Up </button>
        </Link>
        <Link>
          <button className="signin__btn">Sign In </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
