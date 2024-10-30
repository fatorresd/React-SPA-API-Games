import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importar PropTypes
import 'animate.css'; // Importar Animate.css

// Componente para el encabezado del juego
const GameHeader = ({ name, subtitle }) => (
  <div className="d-flex align-items-center">
    <div>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
    </div>
  </div>
);

// Validación de props para GameHeader
GameHeader.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

// Componente de tarjeta de juego
export const GameCard = ({ id, name, subtitle, publisherIcon }) => {
  const gameImageUrl = `src/assets/GamesImages/${id}.jpg`;
  const [isHovered, setIsHovered] = useState(false); // Estado para el hover

  return (
    <Col className="mb-4">
      <Link to={`/games/${id}`} style={{ textDecoration: 'none' }}>
        <Card 
          className={`animate__animated ${isHovered ? 'animate__pulse' : 'animate__fadeIn'}`}
          style={{ 
            width: '18rem', 
            borderRadius: '15px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Efecto de escala
            transition: 'transform 0.3s ease' // Suaviza la transición
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Card.Img 
            variant="top" 
            src={gameImageUrl} 
            style={{ objectFit: 'cover', height: '180px', borderRadius: '15px 15px 0 0' }} 
          />
          <Card.Body>
            <GameHeader name={name} subtitle={subtitle} publisherIcon={publisherIcon} />
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

// Validación de props para GameCard
GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  added: PropTypes.number,
  subtitle: PropTypes.string.isRequired,
  publisherIcon: PropTypes.string,
};

// Para renderizar las tarjetas con espaciado adecuado:
export const GameCardList = ({ games }) => (
  <Row className="g-3">
    {games.map(game => (
      <GameCard key={game.id} {...game} />
    ))}
  </Row>
);

// Validación de props para GameCardList
GameCardList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      added: PropTypes.number,
      subtitle: PropTypes.string.isRequired,
      publisherIcon: PropTypes.string,
    })
  ).isRequired,
};
