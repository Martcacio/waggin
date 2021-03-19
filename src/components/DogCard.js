import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/layouts/Dog.scss";

const DogCard = (props) => {
  let genderColor = "";
  if (props.dogCard.gender === "Hembra") {
    genderColor = "pink";
  } else {
    genderColor = "blue";
  }
  return (
    <>
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo waggin" />
        </div>
      </header>
      <main className="dogContainer">
        <article className="article">
          <img
            className="article__image"
            src={props.dogCard.url}
            alt={props.dogCard.name}
          />
          ¡
        </article>
      </main>
    </>
  );
};

export default DogCard;
