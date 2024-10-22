import { usePublishersExport } from "../hooks/usePublishersExport";
import { downloadJson } from "../functions/downloadJson"; // Asegúrate de importar la función

export const PublisherTest = () => {
  const { games, loading, error } = usePublishersExport(); // Llama al hook

  // Usamos console.log para ver el estado actual de 'games'
  console.log("Games:", games);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Publishers</h1>
      <button onClick={() => downloadJson(games)}>Descargar JSON</button> {/* Botón para descargar */}
      <ul>
        {games.length > 0 ? (
          games.map((publisher) => (
            <li key={publisher.id}>
              <h2>{publisher.name}</h2> {/* Nombre del publisher */}
              <p>Juegos disponibles: {publisher.games_count}</p> {/* Total de juegos */}
              <img 
                src={publisher.image_background} 
                alt={publisher.name} 
                className="img-fluid" // Hace que la imagen sea responsiva
                style={{ width: '300px', height: '200px' }} // Ajusta el tamaño personalizado
                />
              <ul>
                {publisher.games.length > 0 ? (
                  publisher.games.map((game) => ( /*iterar sobre los juegos de cada publisher, es decir entra a games y cerro*/
                    <li key={game.id}>
                      {game.name} {/* Nombre  del juego */}
                    </li>
                  ))
                ) : (
                  <p>No hay juegos disponibles</p>
                )}
              </ul>
            </li>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </ul>
    </div>
  );
};
