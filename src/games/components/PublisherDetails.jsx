import PropTypes from 'prop-types';
import { GameCard } from "../components/GameCard"; // Importando el componente GameCard
import dataGames from "../../assets/dataGames.json"; // Importando la data de los juegos
// import { Container, Spinner } from 'react-bootstrap';

export const PublisherDetails = ({ publisher }) => {
  const games = dataGames[publisher]; // Accediendo directamente a los juegos del publisher

  if (!games) {
    return <p>No publisher found.</p>;
  }

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {games.map(game => (
        <GameCard 
          key={game.id} 
          {...game} 
        />
      ))}
    </div>
  );
};

// Validación de props
PublisherDetails.propTypes = {
  publisher: PropTypes.string.isRequired,
};
