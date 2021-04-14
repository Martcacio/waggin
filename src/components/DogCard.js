import { Link } from "react-router-dom";
import logo from "../images/logo-w.png";
import "../stylesheets/layouts/Dog.scss";
import "../stylesheets/layouts/DogCard.scss";
import React, { useState } from "react";

const DogCard = (props) => {
 /*const [favs, setFavs] = useState("");
  const handleFavs=()=> {
    const favDogsStr = localStorage.getItem("favDogs");
    const favDogs = (favDogsStr === null) ? [] : JSON.parse( favDogsStr );

    favDogs.push( props.dogCard);

    localStorage.setItem( "favDogs", JSON.stringify(favDogs) );

    !favs ? setFavs("fav__fav") : setFavs("");
  };
 */

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
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="header__logo" src={logo} alt="logo waggin" />
        </div>
        <div className="header__others">
          <Link className="link__search" to="/">
            <i className="header__dogCard--search fas fa-search"></i>
          </Link>
          <Link className="link__search" to="/Favs">
            <i className="header__dogCard--bone fas fa-bone"></i>
          </Link>
        </div>
      </header>
      <main className="dogContainer">
        <article className="articleDC">
          <img
            className="articleDC__image"
            src={props.dogCard.url}
            alt={props.dogCard.name}
          />
          <div className="underPhotoDC">
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
             {/* <div>
                <i
                  class={`fas fa-bone fav__bone ${favs}`}
                  onClick={handleFavs}
                ></i>
             </div>*/}
            </div>
            <p className="dogCard__community">
              <i className="dogCard__community-icon fas fa-map-marker-alt"></i>
              {props.dogCard.community}
            </p>
            <p className="dogCard__breed"> {dogBreed} </p>

            <p className="dogCard__age"> {props.dogCard.age} </p>
            <p className="history">Historia:</p>
            <p className="dogCard__description">{props.dogCard.description}</p>

            <p className="dogCard__personality">{dogPersonality}</p>
            <a className="asociation" href={props.dogCard.link} target="_blank" rel="noreferrer">
              <p className="dogCard__asociation">{props.dogCard.asociation}</p>
            </a>
          </div>
        </article>
      </main>
    </>
  );
};

export default DogCard;
