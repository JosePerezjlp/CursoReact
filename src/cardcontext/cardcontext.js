import React, { createContext, useState } from "react";

export const ArticuloContext = createContext();

export const ArticuloProvider = ({ children }) => {
    const [art,setArt] = useState([]);
    
    function removeItem (id){
      const updateArt = art.filter((item) => item.id !== id)
      setArt(updateArt)
    }
    function addItem (infoItem) {
          const foundItem = art.find((item) => item.id === infoItem.item.id);
          if (foundItem){
              foundItem.infoItemcantidad += art.cantidad
          }else {
              art.push({
                   id: infoItem.item.id,
                   name: infoItem.item.title,
                   categoria: infoItem.item.category,
                   descripcion: infoItem.item.description,
                   price: infoItem.item.price,
                   imagen: infoItem.item.image,
                   cantidad: infoItem.cantidad
                })
          }
          setArt([...art]);
        };
        
      return(
        <ArticuloContext.Provider value={{art,addItem,setArt,removeItem}} > 
            {children}
        </ArticuloContext.Provider>
)

};