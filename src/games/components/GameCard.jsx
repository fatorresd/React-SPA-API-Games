import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importar PropTypes
import 'animate.css'; // Importar Animate.css
import dataGames from "../../assets/dataGames.json"; 
import '/Users/fatorresdz/Desktop/FullStack-Ruta/React/Git-Projects/React-games-spa/src/GameCard.css';

// Componente para el encabezado del juego
export const GameHeader = ({ name, background_image }) => (
  <div className="d-flex align-items-center">
    <div>
      <img src={background_image} alt={name} className="card-img-top" style={{ borderRadius: '15px 15px 0 0', height: '180px', objectFit: 'cover' }} />
      <Card.Title>{name}</Card.Title>
    </div>
  </div>
);

// Componente de tarjeta de juego
export const GameCard = ({ id, name, background_image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col className="mb-4">
      <Link to={`/games/${id}`} style={{ textDecoration: 'none' }}>
        <Card 
          className={`game-card animate__animated ${isHovered ? 'animate__pulse' : 'animate__fadeIn'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="game-card-bg" 
            style={{ backgroundImage: `url(${background_image})` }}
          >
            <div className="game-card-overlay">
              <Card.Body className="game-card-body">
                <Card.Title className="game-card-title">{name}</Card.Title>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

// Componente para renderizar la lista de tarjetas de juegos
export const GameCardList = ({ games }) => (
  <Row className="g-3">
    {games.map(game => (
      <GameCard key={game.id} {...game} />
    ))}
  </Row>
);

// Validación de props para GameHeader
GameHeader.propTypes = {
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string,
};

// Validación de props para GameCard
GameCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string,
};

// Validación de props para GameCardList
GameCardList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      background_image: PropTypes.string
    })
  ).isRequired,
};

// Renderiza GameCardList con los datos de dataGames
export const GamesDisplay = () => (
  <GameCardList games={dataGames} />
);
