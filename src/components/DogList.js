import Dog from "./Dog";
import FavsAside from "./FavsAside";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../stylesheets/layouts/DogList.scss";
import "../stylesheets/layouts/FavsAside.scss";
import logo from "../images/logo-w.png";
import logowide from "../images/logo.png";

const DogList = (props) => {
  const [index, setIndex] = useState(0);
  console.log(props.dogs.length, index);


  const handleClickPrev = () => {
    setIndex(index - 1);
  };
  const handleClickSig = () => {
    setIndex(index + 1);
  };
  const handleFav=()=> {
    const favDogsStr = localStorage.getItem("favDogs");
    const favDogs = (favDogsStr === null) ? [] : JSON.parse( favDogsStr );

    favDogs.push(props.dogs[index]);


    localStorage.setItem( "favDogs", JSON.stringify(favDogs) );
    setIndex(index + 1);
  };

 
  if (props.dogs.length === 0) {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img className="header__logo" src={logo} alt="logo waggin" />
          </div>
          <div className="header__others">
            <Link className="link__search" to="/">
              <i className="header__dogList--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i className="header__dogList--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <header className="header2">
          <div className="logowide">
            <img className="header2__logo" src={logowide} alt="logo waggin" />
          </div>
          <div className="header2__others">
            <Link className="link__search" to="/">
              <i className="header2__others--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i className="header2__others--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <div className="container-ps">
          <img src={logowide} alt="logo" className="container-ps__logo" />
          <p className="container-ps__p1">
            Lo sentimos, actualmente no tenemos perros con las características
            seleccionadas.
          </p>
          <p className="container-ps__p2">
            Estamos trabajando para poder mostrar perros de todas las razas y
            comunidades posibles.
          </p>
          <Link className="link__search" to="/">
            <button className="container-ps__search">
              <p>
                Cambiar la búsqueda
                <i className="container-ps__search--icon fas fa-search"></i>
              </p>
            </button>
          </Link>
        </div>
      </>
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
              <i className="header__dogList--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i className="header__dogList--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <header className="header2">
          <div className="logowide">
            <img className="header2__logo" src={logowide} alt="logo waggin" />
          </div>
          <div className="header2__others">
            <Link className="link__search" to="/">
              <i className="header2__others--search fas fa-search"></i>
            </Link>
            <Link className="link__search" to="/Favs">
              <i className="header2__others--bone fas fa-bone"></i>
            </Link>
          </div>
        </header>
        <section className="asideMain">
           <FavsAside className="aside"/>
        <section className="main">
        <main className="dogContainer">
          <li key={props.dogs.id} className="dogList">
            <Dog dogs={props.dogs[index]} />
          </li>
        </main>
        <div className="buttons">
          <div className="prevButton">
            {index > 0 ? (
              <button className="buttons__prev" onClick={handleClickPrev}>
                <i className="fas fa-arrow-left" alt="go left"></i>
              </button>
            ) : (
              <button className="buttons__prev--empty">
                <i className="fas fa-arrow-left" alt="cant go left"></i>
              </button>
            )}
          </div>
          <div className="mainButtons">
            {index + 1 < props.dogs.length ? (
              <button className="buttons__no" onClick={handleClickSig}>
                <i className="buttons__no--cross fas fa-times" ></i>
              </button>
            ) : (
              <Link className="link__search" to="/None">
                <button className="buttons__no">
                  <i className="buttons__no--cross fas fa-times"></i>
                </button>
              </Link>
            )}
            {index + 1 < props.dogs.length ? (
              <button className="buttons__fav" onClick={handleFav}>
                <i className="buttons__fav--bone fas fa-bone"></i>
              </button>
            ) : (
              <Link className="link__search" to="/None">
                <button className="buttons__no">
                  <i className="buttons__fav--bone fas fa-bone"></i>
                </button>
             </Link>
            )}
          </div>
        </div>
        </section>
        </section>
      </>
    );
  }
};
export default DogList;
