import { useState, useEffect } from "react";
import axios from "axios";

// Mapeo de las imágenes de los publishers locales
const getPublisherIcon = (publisherSlug) => {
  return `src/assets/IconsImage/${publisherSlug}.jpg`;
};

export const usePublishersExport = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 40; // Número de juegos por página
  const apiPublisher = 'https://api.rawg.io/api/publishers';
  const API_Key = "1036940c9dbf4f4590023e5ca48efb0e";

  // Función para obtener una página de publishers y sus juegos
  const fetchPublishers = async (page) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${apiPublisher}?key=${API_Key}`,
        {
          params: {
            page_size: pageSize,
            page: page,
          },
        }
      );

      const newPublishers = response.data.results;

      // Filtramos para evitar duplicados basándonos en el ID
      setGames((prevPublishers) => {
        const combinedPublishers = [...prevPublishers, ...newPublishers];
        const uniquePublishers = combinedPublishers.filter(
          (publisher, index, self) =>
            index === self.findIndex((p) => p.id === publisher.id)
        );
        return uniquePublishers;
      });
    } catch (error) {
      console.error("Error al cargar los publishers:", error);
      setError("Failed to load publishers");
    } finally {
      setLoading(false);
    }
  };

  // Ejecuta la función al montar el componente
  useEffect(() => {
    fetchPublishers(1); // Página inicial
  }, []); // [] asegura que solo se ejecuta al montar

  return { games, loading, error, getPublisherIcon };
};
