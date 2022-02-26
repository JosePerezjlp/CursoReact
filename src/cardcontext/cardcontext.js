import React, { createContext, useState } from "react";

export const ArticuloContext = createContext();

export const ArticuloProvider = ({ children }) => {
    const [art,setArt] = useState([]);
    const [carga,setCarga] = useState(false);
  
   // console.log(art)
     function cantidadItems(){
     return art.reduce((total,item)=> total + item.cantidad,0)
   }
    
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
                   name: infoItem.item.categoria,
                   categoria: infoItem.item.marca,
                   descripcion: infoItem.item.description,
                   precio: infoItem.item.precio,
                   imagen: infoItem.item.img,
                   cantidad: infoItem.cantidad
                })
          }
          setArt([...art]);
        };
        
      return(
        <ArticuloContext.Provider value={{art,carga,addItem,setArt,removeItem,setCarga,cantidadItems}} > 
            {children}
        </ArticuloContext.Provider>
)

};