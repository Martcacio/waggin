import React, { useState } from "react";
import "../stylesheets/layouts/Dog.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const None = (props) => {
  return (
    <p>
      Lo sentimos, actualmente no tenemos ningún perro con las características
      seleccionadas. Estamos trabajando para poder mostrar perros de todas las
      razas y comunidades posibles.
    </p>
  );
};

export default None;
