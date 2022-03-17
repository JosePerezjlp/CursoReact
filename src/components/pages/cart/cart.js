import React from "react";
import { useContext } from "react";
import { ArticuloContext } from "../../../cardcontext/cardcontext";
import "../cart/cart.css";
import CarritoVacio from "./render";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const { art, setArt, removeItem } = useContext(ArticuloContext);
  let precioTotal = art.reduce(
    (total, item) => total + item.cantidad * item.precio,
    0
  );
  return (
    <div>
      {art.length > 0 ? (
        art.map((item) => {
          return (
            <div className="cart" key={item.id}>
              <div className="itemsCart">
                <div>
                  <img src={item.img} alt="sera" />
                </div>
                <div>
                  {item.categoria} {item.marca}
                </div>
                <div>({item.cantidad})</div>
                <div>
                  <p>${item.precio}</p>
                </div>
                Stock Disponible:{item.stock - item.cantidad}
                <div>
                  <button className="btn1" onClick={() => removeItem(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <CarritoVacio />
      )}
      {art.length > 0 && (
        <div className="precioTotal">
          <p>Precio total:${precioTotal} </p>
        </div>
      )}
      {art.length > 0 && (
        <Button
          color="error"
          variant="contained"
          className="btnVaciar"
          style={{ marginLeft: 460 }}
          onClick={() => setArt([])}
        >
          Vaciar Carrito
        </Button>
      )}
      {art.length > 0 && (
        <Link
          to={"/finalizarcompra"}
          style={{ textDecoration: "none", marginLeft: 40 }}
        >
          {" "}
          <Button
            color="success"
            variant="contained"
            className="btnFinalizar"
            onClick={() => setArt([])}
          >
            Finalizar compra
          </Button>{" "}
        </Link>
      )}
    </div>
  );
};

export default Cart;
