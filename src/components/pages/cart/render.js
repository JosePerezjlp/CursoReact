import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const CarritoVacio = () => {
  return (
    <div className="btnVacio">
      <p>No agrego ningun producto al carrito</p>
      <br></br>
      <Link to={"/"} style={{ textDecoration: "none" }} >
        <Button color="success" variant="contained" className="btnDir" >Presione Aqui para seleccionar productos</Button>
      </Link>
    </div>
  );
};
export default CarritoVacio;
