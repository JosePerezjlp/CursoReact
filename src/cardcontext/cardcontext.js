import React, { createContext, useState } from "react";

export const ArticuloContext = createContext();

export const ArticuloProvider = ({ children }) => {
    const [art,setArt] = useState([]);
    
    function addItem (infoItem) {
          const foundItem = art.find((item) => item.id === infoItem);
          if (foundItem){
              foundItem.title += art.title
          }else {
              art.push({
                   infoItem
                })
          }
          setArt([...art]);
        };
   
    return(
        <ArticuloContext.Provider value={{art,addItem}} > 
            {children}
        </ArticuloContext.Provider>
)

};