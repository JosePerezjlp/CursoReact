import React from "react";
import { Link } from "react-router-dom";
const CarritoVacio = () => {
  return (
    <div className="btnVacio">
      <p>No agrego ningun producto al carrito</p>
      <br></br>
      <Link to={"/"}>
        <button>Presione Aqui para seleccionar productos</button>
      </Link>
    </div>
  );
};
export default CarritoVacio;
