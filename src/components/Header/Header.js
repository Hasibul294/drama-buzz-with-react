import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-title">
        <img src="/image/theater.png" alt="" />
        <h2 className="web-title">Drama Buzz</h2>
      </div>
      <div className="header-body">
        <h2>Drama Series: "Hablu Jokhon Programmer!"</h2>
        <small>
          {" "}
          Making your Drama Team. You can choose your favorite parson.!!
        </small>
        <h2>Total Budget: 5000000$</h2>
      </div>
    </div>
  );
};

export default Header;
