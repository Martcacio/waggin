import React, { useState } from "react";
import "../stylesheets/layouts/None.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo-w.png";
import logowide from "../images/logo.png";

const None = (props) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="header__logo" src={logo} alt="logo waggin" />
        </div>
        <div className="header__others">
          <Link className="link__search" to="/">
            <i class="header__dogList--search fas fa-search"></i>
          </Link>
          <i class="header__dogList--bone fas fa-bone"></i>
        </div>
      </header>
      <div className="container-ps">
        <img src={logowide} alt="logo" className="container-ps__logo" />
        <p className="container-ps__p1">
          Lo sentimos, actualmente no tenemos más perros con las características
          seleccionadas.
        </p>
        <p className="container-ps__p2">
          Actualmente estamos trabajando para poder mostrar perros de todas las
          razas y comunidades posibles.
        </p>{" "}
        <Link className="link__search" to="/">
          <button className="container-ps__search">
            <p>
              Actualizar la búsqueda
              <i class="container-ps__search--icon fas fa-search"></i>
            </p>
          </button>
        </Link>
        <button className="container-ps__favs">
          <p>
            Acceder a Favoritos
            <i class="container-ps__favs--icon fas fa-bone"></i>
          </p>
        </button>
      </div>
    </>
  );
};

export default None;
