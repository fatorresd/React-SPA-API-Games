//import { useGames } from "../hooks/useGames";
import { useGamesExport } from "../hooks/useGamesExport";
import Button from 'react-bootstrap/Button';
import { downloadJson } from "../functions/downloadJson";


export const GamesListConnect = () => {
  const { games } = useGamesExport(); // Llama al hook
  const { downloadJSON } = downloadJson(); // Llama a la función de descarga

  return (
    <div className="container">
      <h1 className="mb-4">Lista de Juegos</h1>
      <Button 
        className="btn btn-success mb-4"
        variant="Success" 
        onClick={() => downloadJSON(games)}
        >
        Presióname
      </Button>
      <ul className="list-group">
        {games.map((game, index) => (
          <li key={index} className="list-group-item">
            <h5>{game.name}</h5>
            <p><strong>Género:</strong> {game.genres.name ? game.genre.name : "No disponible"}</p>
            <p><strong>Fecha de Lanzamiento:</strong> {game.released ? game.released : "Sin fecha"}</p>
            <img src={game.background_image} alt={game.name} style={{ width: 300 }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
