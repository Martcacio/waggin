import React, { useState, useEffect } from "react";
import DogList from "./DogList";
import Filter from "./Filter";
import data from "../data/data.json";
import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import "../stylesheets/App.scss";

const App = () => {
  const [dogs, setDogs] = useState(data);
  const [breed, setBreed] = useState("all");
  const [community, setCommunity] = useState("all");

  const handleFilter = (dataFilter) => {
    if (dataFilter.key === "breed") {
      setBreed(dataFilter.value);
      console.log();
    } else if (dataFilter.key === "community") {
      setCommunity(dataFilter.value);
    }
  };

  const handleReset = () => {
    setBreed("all");
    setCommunity("all");
  };

  return (
    <>
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo waggin" />
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
      </section>
      <DogList dogs={dogs} />
    </>
  );
};

export default App;
