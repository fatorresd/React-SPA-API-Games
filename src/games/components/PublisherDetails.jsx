import { getIconsByPublishers } from "../helpers/getIconsByPublishers";
import { GameCard } from "./GameCard";
import { usePublishersExport } from "../hooks/usePublishersExport";
import { Container, Spinner } from 'react-bootstrap';

export const PublisherDetails = ({ publisher }) => {
  const { games, loading, error } = usePublishersExport(); // Obtenemos juegos desde el hook

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return <p>{error}</p>; // Manejo de errores
  }

  const { validPublisher, publisherIcon } = getIconsByPublishers(publisher, games);

  // console.log("Valid Publisher:", validPublisher); // Para depurar
  // console.log("Publisher Icon:", publisherIcon); // Para depurar

  if (!validPublisher) {
    return <p>No publisher found.</p>; // Mensaje alternativo si no se encuentra publisher
  }

  return (
    <div className="row rows-cols-1 row-cols-md-3 g3">
      {validPublisher.games.map(game => (
        <GameCard 
          key={game.id} 
          {...game} // Pasa las propiedades del juego
          publisherIcon={publisherIcon} // Pasa el ícono del publicador
        />
      ))}
    </div>
  );
};
