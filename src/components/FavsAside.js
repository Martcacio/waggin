import React, { useState } from "react";
import "../stylesheets/layouts/Favs.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo-w.png";


const FavsAside =() => {
  const favDogsStr = localStorage.getItem("favDogs");
  const favDogs = (favDogsStr === null) ? [] : JSON.parse( favDogsStr );
  const [fav, setFav] = useState(favDogs);

const favDog = favDogs.map((item, i) => {
  let genderColor = "";
if (item.gender === "Hembra") {
  genderColor = "pink";
} else {
  genderColor = "blue";
}

function handleUnFav(i){
  const favList = fav.filter((item)=> item.i !== i);
  setFav(favList);
  console.log("CLICK");
  if (favList) {
    favList.splice(i,1);
  }
}

/*
const [fav, setFav] = useState(favDogs);
const handleUnFav = () => {
  !fav ? setFav("favDogs") : setFav("");*/


  /*if (index > -1) {
      favDogs.splice(props.dogs[index], 1);
    } else {
      favDogs.push(props.dogs[index]);
    }*/
  return (
  <li key={i}  className={item.name}>
  <article className="favAside-article">
  <button className="unfav" onClick={handleUnFav}>
                <i className="unfav__cross fas fa-times" ></i>
              </button>
      <div className="favAside-article__containerImg"> <img
          className="favAside-article__image--background"
          src={item.url}
          alt={item.name}
        />
        <img
          className="favAside-article__image"
          src={item.url}
          alt={item.name}
        />
      </div>
      <div className="favAside-underPhoto">
        <div className="favAside-nameGender">
          <p className="favAside-nameGender__name"> {item.name} </p>
          <div className="favAside-nameGender__gender">
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
    </article>
    
  </li>
)})


console.log(favDogs);
    return (
      <>
      <h1 className="title">Tus peludos favoritos</h1>
      <div><ul >{favDog}</ul></div>
      </>
      )} 
    



export default FavsAside;
