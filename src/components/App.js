import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DogList from "./DogList";
import DogCard from "./DogCard";
import Filter from "./Filter";
import data from "../data/data.json";
import { Route, Switch } from "react-router-dom";
import logo from "../images/logo-w.png";
import "../stylesheets/App.scss";

const App = () => {
  const [dogs, setDogs] = useState(data);
  const [breed, setBreed] = useState("all");
  const [community, setCommunity] = useState("all");

  const handleFilter = (dataFilter) => {
    if (dataFilter.key === "breed") {
      setBreed(dataFilter.value);
    } else if (dataFilter.key === "community") {
      setCommunity(dataFilter.value);
    }
  };

  const handleReset = () => {
    setBreed("all");
    setCommunity("all");
  };

  const filterDogs = dogs
    .filter((dogs) => {
      return breed === "all" ? true : dogs.breed.includes(breed);
    })
    .filter((dogs) => {
      return community === "all" ? true : dogs.community === community;
    });

  const renderLanding = (props) => {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img className="header__logo" src={logo} alt="logo waggin" />
          </div>
          <div className="header__others">
            <Link className="link__search" to="/">
              <i class="header__others--search fas fa-search"></i>
            </Link>
            <i class="header__others--bone fas fa-bone"></i>
          </div>
        </header>
        <section className="main__filters">
          <Filter
            className="filters"
            handleFilter={handleFilter}
            handleReset={handleReset}
            breed={breed}
            community={community}
          />
          <Link className="link__search" to="/dog/">
            <p className="link__search--button"> Buscar </p>
          </Link>
        </section>
      </>
    );
  };

  const renderSearch = (props) => {
    return <DogList dogs={filterDogs} />;
  };

  const renderDogCard = (props) => {
    const id = parseInt(props.match.params.id);
    const dogCard = dogs.find((dog) => {
      return dog.id === id;
    });
    return <DogCard dogCard={dogCard} />;
  };

  return (
    <Switch>
      <Route exact path="/" component={renderLanding} />
      <Route path="/dog/:id" render={renderDogCard} />
      <Route path="/dog" render={renderSearch} />
    </Switch>
  );
};

export default App;
