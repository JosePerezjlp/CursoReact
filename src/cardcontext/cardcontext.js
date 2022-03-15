import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
export const ArticuloContext = createContext();

export const ArticuloProvider = ({ children }) => {
  const [art, setArt] = useState([]);
  const [carga, setCarga] = useState(false);

  // console.log(art)
  function cantidadItems() {
    return art.reduce((total, item) => total + item.cantidad, 0);
  }

  function removeItem(id) {
    const updateArt = art.filter((item) => item.id !== id);
    setArt(updateArt);
    Swal.fire({
      icon: "success",
      title: "Se elimino el item seleccionado con Exito",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function addItemCart() {
    art.cantidad++;
  }

  function addItem(infoItem) {
    const foundItem = art.find((item) => item.id === infoItem.item.id);
    if (foundItem) {
      foundItem.infoItemcantidad += art.cantidad;
    } else {
      art.push({
        id: infoItem.item.id,
        marca: infoItem.item.marca,
        categoria: infoItem.item.categoria,
        descripcion: infoItem.item.descripcion,
        precio: infoItem.item.precio,
        img: infoItem.item.img,
        cantidad: infoItem.cantidad,
        stock: infoItem.item.stock,
      });
    }
    setArt([...art]);
  }

  return (
    <ArticuloContext.Provider
      value={{
        art,
        carga,
        addItem,
        setArt,
        removeItem,
        setCarga,
        cantidadItems,
        addItemCart,
      }}
    >
      {children}
    </ArticuloContext.Provider>
  );
};
