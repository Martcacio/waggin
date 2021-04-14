import React, { useState } from "react";
import "../stylesheets/layouts/Favs.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo-w.png";

const Favs =() => {
  const favDogsStr = localStorage.getItem("favDogs");
  const favDogs = (favDogsStr === null) ? [] : JSON.parse( favDogsStr );

const favDog = favDogs.map((item, i) => {
  let genderColor = "";
if (item.gender === "Hembra") {
  genderColor = "pink";
} else {
  genderColor = "blue";
}

const handleUnFav=()=>{}

  return (
  <li key={i}  className={item.name}>
  <article className="fav-article">
  <button className="unfav" onClick={handleUnFav}>
                <i className="unfav__cross fas fa-times" ></i>
              </button>
      <div className="fav-article__containerImg"> <img
          className="fav-article__image--background"
          src={item.url}
          alt={item.name}
        />
        <img
          className="fav-article__image"
          src={item.url}
          alt={item.name}
        />
      </div>
      <div className="fav-underPhoto">
        <div className="fav-nameGender">
          <p className="fav-nameGender__name"> {item.name} </p>
          <div className="fav-nameGender__gender">
            {item.gender === "Hembra" ? (
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
      <Link className="link" to={"/dog/" + item.id}>
        <li className="">
          <button className="fav-article__button"> Ver perfil </button>
        </li>
      </Link>
    </article>
    
  </li>
)});


console.log(favDogs);
    return (
      <>
      <header className="header">
       <div className="logo">
          <img className="header__logo" src={logo} alt="logo waggin" />
       </div>
        <div className="header__others">
          <Link className="link__search" to="/">
            <i className="header__dogFav--search fas fa-search"></i>
          </Link>
          <Link className="link__search" to="/Favs">
            <i className="header__dogFav--bone fas fa-bone"></i>
          </Link>
        </div>
      </header>
      <h1 className="title">Tus peludos favoritos</h1>
      <div><ul >{favDog}</ul></div>
      </>
      )} 
    



export default Favs;
