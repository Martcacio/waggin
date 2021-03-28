import React, { useState } from "react";
import "../stylesheets/layouts/Dog.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Dog = (props) => {
  let genderColor = "";
  if (props.dogs.gender === "Hembra") {
    genderColor = "pink";
  } else {
    genderColor = "blue";
  }
  /* if (props.dogs === undefined) {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img className="header__logo" src={logo} alt="logo waggin" />
          </div>
          <div className="header__others">
            <Link className="link__search" to="/">
              <i class="header__dogCard--search fas fa-search"></i>
            </Link>
            <i class="header__dogCard--bone fas fa-bone"></i>
          </div>
        </header>
        <p>
          Lo sentimos, actualmente no tenemos ningún perro con las
          características seleccionadas. Estamos trabajando para poder mostrar
          perros de todas las razas y comunidades posibles.
        </p>
      </>
    );
  } else {  */
  return (
    <article className="article">
      <div className="article__containerImg">
        <img
          className="article__image"
          src={props.dogs.url}
          alt={props.dogs.name}
        />
      </div>
      <div className="underPhoto">
        <div className="nameGender">
          <p className="nameGender__name"> {props.dogs.name} </p>
          <div className="nameGender__gender">
            {props.dogs.gender === "Hembra" ? (
              <i
                className={` nameGender__gender--female fas fa-venus  ${genderColor}`}
              ></i>
            ) : (
              <i
                className={` nameGender__gender--male fas fa-mars ${genderColor}`}
              ></i>
            )}
          </div>
        </div>
      </div>
      <Link className="link" to={"/dog/" + props.dogs.id}>
        <li className="">
          <button className="article__button"> Ver perfil </button>
        </li>
      </Link>
    </article>
  );
};
/* }; */

export default Dog;
