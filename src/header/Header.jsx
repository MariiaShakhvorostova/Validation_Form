import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="details">
        <div className="detail-item">
          <img src="/src/imgs/calendar-icon.png" alt="Date" />
          <span>28 декабря</span>
        </div>
        <div className="detail-item">
          <img src="/src/imgs/clock-icon.png" alt="Duration" />
          <span>3,5 часа</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
