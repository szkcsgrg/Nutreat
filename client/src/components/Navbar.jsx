import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <header className="flex flex-row">
      <div className="basis-3/5 ">
        <img
          className="w-3/5 md:w-3/12 xl:w-2/12"
          id="logo"
          src={logo}
          alt="The logo of the Brand"
        />
      </div>
      <div className="basis-2/5 bubble-menu justify-end">
        <div className="bigger" id="menu">
          Menu
        </div>
        <div className="middle" id="contact">
          Kapcsolat
        </div>
        <div className="small" id="userprofile">
          Profile Icon
        </div>
      </div>
    </header>
  );
}

export default Navbar;
