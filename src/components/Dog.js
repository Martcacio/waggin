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
  return (
    <article className="article">
      <div className="article__containerImg"> <img
          className="article__image--background"
          src={props.dogs.url}
          alt={props.dogs.name}
        />
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
