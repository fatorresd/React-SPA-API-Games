import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import 'animate.css'; // Importar Animate.css

// Componente para el encabezado del juego
const GameHeader = ({ name, subtitle, publisherIcon }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <img 
      src={publisherIcon} 
      alt="avatar"
      style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }}
    />
    <div>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
    </div>
  </div>
);

// Componente de tarjeta de juego
export const GameCard = ({ id, name, added, subtitle, publisherIcon }) => {
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
            {/* Puedes eliminar el componente GameButtons si ya no lo necesitas */}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

// Para renderizar las tarjetas con espaciado adecuado:
export const GameCardList = ({ games }) => (
  <Row className="g-3">
    {games.map(game => (
      <GameCard key={game.id} {...game} />
    ))}
  </Row>
);
