import React from "react";
import "./Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";

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
        <NotificationsIcon />
      </div>
    </div>
  );
};

export default Header;
