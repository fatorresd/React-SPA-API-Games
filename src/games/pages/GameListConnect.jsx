import { useGamesExport } from "../hooks/useGamesExport";
import { downloadJson } from "../functions/downloadJson"; // Importa la función downloadJson
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Importa el Spinner
import 'bootstrap-icons/font/bootstrap-icons.css';

export const GamesListConnect = () => {
  const { gamesInfo, isLoading } = useGamesExport(); // Llama al hook

  return (
    <div className="container">
      <h1 className="mb-4 d-flex align-items-center">
        Games Of The Year 
        <i className="bi bi-trophy-fill me-2" style={{ fontSize: '1.5rem' }}></i> {/* Ícono del trofeo */}
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
          {gamesInfo.map((game, index) => (
            <div key={`${game.id}-${index}`} className="col-md-4"> {/* Usar combinación de id e índice como key */}
              <div className="card" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <img 
                  src={game.background_image} 
                  alt={game.name} 
                  className="card-img-top" 
                  style={{ borderRadius: '15px 15px 0 0', height: '180px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text"><strong>Género:</strong> {game.genres && game.genres.length > 0 ? game.genres.map(g => g.name).join(', ') : "No disponible"}</p>
                  <p className="card-text"><strong>Fecha de Lanzamiento:</strong> {game.released ? game.released : "Sin fecha"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mensaje si no hay juegos disponibles */}
      {gamesInfo.length === 0 && !isLoading && <p>No hay juegos disponibles.</p>}
    </div>
  );
};
