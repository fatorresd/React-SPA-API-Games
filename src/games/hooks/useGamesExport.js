import { useState, useEffect } from "react";
import axios from "axios"; // Para hacer solicitudes HTTP
//import { downloadJson } from "../functions/downloadJson"; // Asegúrate de que la ruta sea correcta

export const useGamesExport = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 20; // Número de juegos por página
  const totalGames = 100; // Cuántos juegos en total queremos obtener
  const [allGamesLoaded, setAllGamesLoaded] = useState(false); // Para saber si ya se cargaron todos los juegos

  // API Key de Rawg.io
  const API_Key = "1036940c9dbf4f4590023e5ca48efb0e";

  // Función para obtener una página de juegos
  const fetchGames = async (page) => {
    try {
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
    }
  };

  // useEffect para cargar más juegos cuando cambie la página
  useEffect(() => {
    if (games.length < totalGames && !allGamesLoaded) {
      fetchGames(page);
    }
  }, [page]);

  // useEffect para seguir llamando más páginas hasta tener 100 juegos
  useEffect(() => {
    if (games.length > 0 && games.length < totalGames) {
      setPage((prevPage) => prevPage + 1);
    } else if (games.length >= totalGames) {
      setAllGamesLoaded(true); // Ya se han cargado todos los juegos
      console.log(games); // Muestra los juegos en la consola
    }
  }, [games]);


  // Devuelve los juegos y cualquier otro valor que quieras utilizar en el componente
  return { games }; // Agrega exportGames si quieres llamarlo desde otro componente
};
