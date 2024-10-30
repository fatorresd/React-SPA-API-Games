import { useState, useEffect } from "react";
import axios from "axios"; // Para hacer solicitudes HTTP

export const useGamesExport = () => {
  const [gamesInfo, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 20; // Número de juegos por página
  const totalGames = 100; // Cuántos juegos en total queremos obtener
  const [allGamesLoaded, setAllGamesLoaded] = useState(false); // Para saber si ya se cargaron todos los juegos
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  // API Key de Rawg.io
  const API_Key = "1036940c9dbf4f4590023e5ca48efb0e";

  // Función para obtener una página de juegos
  const fetchGames = async (page) => {
    try {
      setIsLoading(true); // Comienza a cargar
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_Key}`,
        {
          params: {
            page_size: pageSize,
            page: page,
          },
        }
      );

      // Extrae los resultados de la API
      const newGames = response.data.results;

      // Actualiza el estado con los nuevos juegos
      setGames((prevGames) => [...prevGames, ...newGames]);
    } catch (error) {
      console.error("Error al cargar los juegos:", error);
    } finally {
      setIsLoading(false); // Termina la carga
    }
  };

  // useEffect para cargar más juegos cuando cambie la página
  useEffect(() => {
    if (gamesInfo.length < totalGames && !allGamesLoaded) {
      fetchGames(page);
    }
  }, [page]);

  // useEffect para seguir llamando más páginas hasta tener 100 juegos
  useEffect(() => {
    if (gamesInfo.length > 0 && gamesInfo.length < totalGames) {
      setPage((prevPage) => prevPage + 1);
    } else if (gamesInfo.length >= totalGames) {
      setAllGamesLoaded(true); // Ya se han cargado todos los juegos
      //console.log(gamesInfo); // Muestra los juegos en la consola
    }
  }, [gamesInfo]);

  // Devuelve los juegos y cualquier otro valor que quieras utilizar en el componente
  return { gamesInfo, isLoading }; // Ahora devuelve isLoading
};
