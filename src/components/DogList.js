import Dog from "./Dog";
import React, { useState } from "react";
import "../stylesheets/layouts/DogList.scss";
import noright from "../images/arrowleft.png";
import noleft from "../images/arrowright.png";
import right from "../images/arrowL.png";
import left from "../images/arrowR.png";
import logo from "../images/logo.png";

const DogList = (props) => {
  const handleClickPrev = () => {
    setIndex(index - 1);
  };
  const handleClickSig = () => {
    setIndex(index + 1);
  };
  const [index, setIndex] = useState(0);
  return (
    <>
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo waggin" />
        </div>
      </header>
      <main className="dogContainer">
        <li key={props.dogs.id} className="dogList">
          <Dog dogs={props.dogs[index]} />
        </li>
      </main>
      <div className="buttons">
        {index > 0 ? (
          <button className="buttons__prev" onClick={handleClickPrev}>
            <img className="buttons__arrow" src={right} alt="go left" />
          </button>
        ) : (
          <button className="buttons__prev--empty">
            <img className="buttons__arrow" src={noright} alt="cant go left" />
          </button>
        )}
        {index < props.dogs.length ? (
          <button className="buttons__sig" onClick={handleClickSig}>
            <img className="buttons__arrow" src={left} alt="go ight" />
          </button>
        ) : (
          <button className="buttons__sig--empty">
            <img className="buttons__arrow" src={noleft} alt="cant go right" />
          </button>
        )}
      </div>
    </>
  );
};

export default DogList;
