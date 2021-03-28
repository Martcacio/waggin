import Dog from "./Dog";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../stylesheets/layouts/DogList.scss";
import logo from "../images/logo-w.png";

const DogList = (props) => {
  const handleClickPrev = () => {
    setIndex(index - 1);
  };
  const handleClickSig = () => {
    setIndex(index + 1);
  };

  const [index, setIndex] = useState(0);
  console.log(props.dogs.length, index);
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
      <main className="dogContainer">
        <li key={props.dogs.id} className="dogList">
          <Dog dogs={props.dogs[index]} />
        </li>
      </main>
      <div className="buttons">
        <div className="prevButton">
          {index > 0 ? (
            <button className="buttons__prev" onClick={handleClickPrev}>
              <i class="fas fa-arrow-left" alt="go left"></i>
            </button>
          ) : (
            <button className="buttons__prev--empty">
              <i class="fas fa-arrow-left" alt="cant go left"></i>
            </button>
          )}
        </div>
        <div className="mainButtons">
          {index + 1 < props.dogs.length ? (
            <button className="buttons__no" onClick={handleClickSig}>
              <i class="buttons__no--cross fas fa-times"></i>
            </button>
          ) : (
            <Link className="link__search" to="/None">
              <button className="buttons__no">
                <i class="buttons__no--cross fas fa-times"></i>
              </button>
            </Link>
          )}

          {index + 1 < props.dogs.length ? (
            <button className="buttons__fav" onClick={handleClickSig}>
              <i class="buttons__fav--bone fas fa-bone"></i>
            </button>
          ) : (
            <Link className="link__search" to="/None">
              <button className="buttons__no">
                <i class="buttons__fav--bone fas fa-bone"></i>
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default DogList;
