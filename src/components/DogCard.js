import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo-w.png";
import "../stylesheets/layouts/Dog.scss";
import "../stylesheets/layouts/DogCard.scss";

const DogCard = (props) => {
  let genderColor = "";
  if (props.dogCard.gender === "Hembra") {
    genderColor = "pink";
  } else {
    genderColor = "blue";
  }
  const dogBreed = props.dogCard.breeds.map((breed, index) => {
    return (
      <li key={index} breed="breeds" className="dogCard__breed--breed">
        {breed}
      </li>
    );
  });

  const dogPersonality = props.dogCard.personalities.map(
    (personality, index) => {
      return (
        <li
          key={index}
          personality="personalities"
          className="dogCard__personality--personality"
        >
          {personality}
        </li>
      );
    }
  );

  if (props.dogCard === undefined) {
    return (
      <p>
        Lo sentimos, actualmente no tenemos ningún perro con las características
        seleccionadas. Estamos trabajando para poder mostrar perros de todas las
        razas y comunidades posibles.
      </p>
    );
  } else {
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
        <main className="dogContainer">
          <article className="article">
            <img
              className="articleDC__image"
              src={props.dogCard.url}
              alt={props.dogCard.name}
            />
            <div className="underPhoto">
              <div className="nameGenderDC">
                <div className="nameGenderDC-container">
                  <p className="nameGenderDC__name"> {props.dogCard.name} </p>
                  <div className="nameGenderDC__gender">
                    {props.dogCard.gender === "Hembra" ? (
                      <i
                        className={` nameGenderDC__gender--female fas fa-venus  ${genderColor}`}
                      ></i>
                    ) : (
                      <i
                        className={` nameGenderDC__gender--male fas fa-mars ${genderColor}`}
                      ></i>
                    )}
                  </div>
                </div>
                <div>
                  <i class="fav__bone fas fa-bone"></i>
                </div>
              </div>
              <p className="dogCard__community">
                <i className="dogCard__community-icon fas fa-map-marker-alt"></i>
                {props.dogCard.community}
              </p>
              <p className="dogCard__breed"> {dogBreed} </p>

              <p className="dogCard__age"> {props.dogCard.age} </p>
              <p className="title">Historia:</p>
              <p className="dogCard__description">
                {props.dogCard.description}
              </p>

              <p className="dogCard__personality">{dogPersonality}</p>
              <button className="asociation">
                <p className="dogCard__asociation">
                  {props.dogCard.asociation}
                </p>
              </button>
            </div>
          </article>
        </main>
      </>
    );
  }
};

export default DogCard;
