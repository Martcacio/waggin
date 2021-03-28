import React, { useState } from "react";
import "../stylesheets/layouts/Favs.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo-w.png";

const None = (props) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="header__logo" src={logo} alt="logo waggin" />
        </div>
        <div className="header__others">
          <Link className="link__search" to="/">
            <i class="header__dogFav--search fas fa-search"></i>
          </Link>
          <Link className="link__search" to="/Favs">
            <i class="header__dogFav--bone fas fa-bone"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default None;
