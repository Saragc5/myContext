import React, { createContext, useContext, useState, useEffect } from "react";
import { SEARCH_URL } from "./settings";

//* EN ESTE ARCHIVO TENGO QUE HACER TODOS LOS FETCH NECESARIOS PARA LUEGO CONSUMIR EN EL RESTO DE MIS COMPONENTES, 
// PORQUE TODOS SE VAN A NUTRIR DEL CONTEXT. *//

// CREAMOS EL CONTEXTO:
const AppContext = createContext();
// CREAMOS EL HOOK PARA UTILIZAR EL CONTEXTO:
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe utilizarse dentro de un AppProvider");
  }
  return context;
};

// CREAMOS LA FUNCIÓN PARA PROPORCIONAR EL CONTEXTO:
// ESTO ES LO QUE TENGO QUE IMPORTAR EN APP.JS
export const AppProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);

  //Fetch para recibir películas
  const fetchDataMovies = async () => {
    const response = await fetch(SEARCH_URL);
    const resultado = await response.json();
    setMovieData(resultado.entries);
    console.log(resultado.entries);
    console.log(movieData);
  };
  useEffect(() => {
    fetchDataMovies();
  }, []);
  return (
    <AppContext.Provider value={{ movieData, setMovieData }}>
      {children}
    </AppContext.Provider>
  );
};
