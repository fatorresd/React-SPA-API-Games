import { Navigate, useParams, useNavigate } from "react-router-dom";
import { usePublishersExport } from "../hooks/usePublishersExport";
import { getGamesById } from "../helpers";
import { Container, Row, Col, Card, Button, Badge, Spinner } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

export const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { games, loading, error } = usePublishersExport();
  const gameImageUrl = `/GamesImages/${id}.jpg`;

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (!games || error) {
    return <Navigate to="/gotygames" />;
  }

  const game = getGamesById(games, id);

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

        {game ? (
          <Row className="justify-content-center">
            <Col md={8} lg={10}>
              <Card className="border-0 shadow-sm">
                <Row className="g-0">
                  <Col md={6}>
                    {gameImageUrl ? (
                      <Card.Img
                        src={gameImageUrl}
                        alt={game.name}
                        className="img-fluid rounded-start h-100 object-fit-cover"
                        style={{ maxHeight: '500px' }}
                        onError={(e) => {
                          e.target.onerror = null; // Evita bucles infinitos
                          e.target.src = '/placeholder.jpg'; // Muestra una imagen de placeholder
                        }}
                      />
                    ) : (
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <p>No hay foto disponible.</p>
                      </div>
                    )}
                  </Col>
                  <Col md={6}>
                    <Card.Body className="d-flex flex-column h-100 p-4">
                      <div>
                        <Card.Title as="h1" className="display-6 mb-3">
                          {game.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">
                          Slug: {game.slug}
                        </Card.Subtitle>
                      </div>

                      <div className="mt-3">
                        <h5 className="mb-3">Estadísticas del juego</h5>
                        <Badge bg="primary" className="me-2 p-2">
                          Added: {game.added.toLocaleString()}
                        </Badge>
                      </div>

                      <div className="mt-4">
                        <h5 className="mb-3">Descripción</h5>
                        <Card.Text>
                          {game.description || "No hay descripción disponible para este juego."}
                        </Card.Text>
                      </div>

                      <div className="mt-auto pt-4">
                        <Button variant="primary" className="me-2">
                          Ver más detalles
                        </Button>
                        <Button variant="outline-secondary">
                          Compartir
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ) : (
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
        )}
      </Container>
    </Container>
  );
};
