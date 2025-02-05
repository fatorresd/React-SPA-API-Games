import { useGamesExport } from "../hooks/useGamesExport";
import { downloadJson } from "../functions/downloadJson"; // Importa la función downloadJson
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner"; // Importa el Spinner
import "bootstrap-icons/font/bootstrap-icons.css";
import "/Users/fatorresdz/Desktop/FullStack-Ruta/React/Git-Projects/React-games-spa/src/GameListConnect.css"; // Importa el archivo CSS

export const GamesListConnect = () => {
  const { gamesInfo, isLoading } = useGamesExport(); // Llama al hook

  // Eliminar duplicados basados en el ID del juego
  const uniqueGames = gamesInfo.filter((game, index, self) =>
    index === self.findIndex((g) => g.id === game.id)
  );

  return (
    <div className="container">
      <h1 className="mb-4 d-flex align-items-center">
        Games Of The Year
        <i
          className="bi bi-trophy-fill me-2"
          style={{ fontSize: "1.5rem" }}
        ></i>{" "}
        {/* Ícono del trofeo */}
      </h1>
      <Button
        className="btn btn-success mb-4"
        variant="Success"
        onClick={() => downloadJson(gamesInfo)} // Reactiva la descarga del JSON
      >
        Descargar Juegos
      </Button>

      {/* Spinner de carga */}
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : (
        <div className="row g-4">
          {uniqueGames.map((game, index) => (
            <div key={`${game.id}-${index}`} className="col-md-4">
              <div className="game-card">
                <div
                  className="game-card-bg"
                  style={{ backgroundImage: `url(${game.background_image})` }}
                >
                  <div className="game-card-overlay">
                    <div className="game-card-body">
                      <h5 className="game-card-title">{game.name}</h5>
                      <p className="game-card-text">
                        <strong>Género:</strong>{" "}
                        {game.genres && game.genres.length > 0
                          ? game.genres.map((g) => g.name).join(", ")
                          : "No disponible"}
                      </p>
                      <p className="game-card-text">
                        <strong>Fecha de Lanzamiento:</strong>{" "}
                        {game.released ? game.released : "Sin fecha"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mensaje si no hay juegos disponibles */}
      {uniqueGames.length === 0 && !isLoading && (
        <p>No hay juegos disponibles.</p>
      )}
    </div>
  );
};