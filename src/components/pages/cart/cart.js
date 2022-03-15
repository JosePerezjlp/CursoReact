import React from "react";
import { useContext } from "react";
import { ArticuloContext } from "../../../cardcontext/cardcontext";
import "../cart/cart.css";
import CarritoVacio from "./render";
import { Link } from "react-router-dom";

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
            <div>
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
                    <button
                      className="btn1"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              {art && (
                <div>
                  <p>precio total:${precioTotal} </p>
                </div>
              )}
              {art && (
                <button className="btnVaciar" onClick={() => setArt([])}>
                  Vaciar Carrito
                </button>
              )}
              {art && (
                <Link
                  to={"/finalizarcompra"}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <button className="btnFinalizar" onClick={() => setArt([])}>
                    Finalizar compra
                  </button>{" "}
                </Link>
              )}
            </div>
          );
        })
      ) : (
        <CarritoVacio />
      )}
    </div>
  );
};

export default Cart;
