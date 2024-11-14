import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

import defaultImage from '../../assets/images/GameIcon.png'; // Importa la imagen por defecto
import dataGames from "../../assets/dataGames.json"; // Importando la data de los juegos

export const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  // Buscar el juego por su ID
  const game = Object.keys(dataGames)
    .map((publisher) => dataGames[publisher].find((game) => game.id === Number(id)))
    .find((game) => game !== undefined); // Encuentra el primer juego que coincida con el id

  if (!game) {
    return (
      <Card className="text-center p-5 border-0 shadow-sm">
        <Card.Body>
          <Card.Title as="h2">Juego no encontrado</Card.Title>
          <Card.Text>
            Lo sentimos, no pudimos encontrar el juego que estás buscando.
          </Card.Text>
          <Button variant="primary" onClick={onNavigateBack}>
            Volver a la lista de juegos
          </Button>
        </Card.Body>
      </Card>
    );
  }

  // Verifica si hay una URL válida para la imagen
  const imageUrl = game.background_image || defaultImage; // Usa la imagen importada si no hay una URL // Imagen por defecto si no hay URL

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button 
            variant="outline-primary" 
            onClick={onNavigateBack}
          >
            <ArrowLeft className="me-2" />
            Volver
          </Button>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Img 
                variant="top" 
                src={imageUrl} 
                alt={game.name} 
                style={{ 
                  borderRadius: '15px 15px 0 0', 
                  height: '300px', 
                  objectFit: 'cover' 
                }} 
              />
              <Card.Body>
                <Card.Title as="h3">{game.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Lanzamiento: {game.release_year}</Card.Subtitle>
                <Card.Text>
                  <strong>Género:</strong> {game.genre} <br />
                  <strong>Plataformas:</strong> {game.platforms.join(', ')}
                </Card.Text>
                <Button variant="primary" onClick={onNavigateBack}>Volver a la lista de juegos</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};  