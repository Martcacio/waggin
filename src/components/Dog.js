import React, { useState } from "react";
import "../stylesheets/layouts/Dog.scss";

const Dog = (props) => {
  let genderColor = "";
  if (props.dogs.gender === "Female") {
    genderColor = "pink";
  } else {
    genderColor = "blue";
  }

  return (
    <article className="article">
      <img
        className="article__image"
        src={props.dogs.url}
        alt={props.dogs.name}
      />
      <div className="nameGender">
        <p className="nameGender__name">{props.dogs.name}</p>
        <div className="nameGender__gender">
          {props.dogs.gender === "Female" ? (
            <i
              class={` nameGender__gender--female fas fa-venus  ${genderColor}`}
            ></i>
          ) : (
            <i
              class={` nameGender__gender--male fas fa-mars ${genderColor}`}
            ></i>
          )}
        </div>
      </div>

      <button className="article__button">Ver perfil</button>
    </article>
  );
};

export default Dog;
