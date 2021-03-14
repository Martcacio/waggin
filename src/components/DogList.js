import Dog from "./Dog";
import React, { useState } from "react";
import "../stylesheets/layouts/DogList.scss";

const DogList = (props) => {
  const dogs = props.dogs.map((dog) => {
    return (
      <li key={dog.id} className="dogList">
        <Dog dogs={dog} />
      </li>
    );
  });
  return (
    <>
      <div>{dogs}</div>
    </>
  );
};

export default DogList;
