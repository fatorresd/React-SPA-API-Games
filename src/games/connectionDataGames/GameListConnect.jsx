import { useGames } from "../hooks/useGames";

export const GamesList = () => {
  const { games } = useGames(); // Llama al hook

  return (
    <div className="container">
      <h1 className="mb-4">Lista de Juegos</h1>
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

export default GamesList;
