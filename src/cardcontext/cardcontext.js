import React, { createContext, useState } from "react";

export const ArticuloContext = createContext();

export const ArticuloProvider = ({ children }) => {
    const [art,setArt] = useState([])
        

    return(
        <ArticuloContext.Provider value={{setArt}} > 
            {children}
        </ArticuloContext.Provider>
)

};