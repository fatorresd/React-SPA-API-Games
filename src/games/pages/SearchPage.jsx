import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import queryString from 'query-string';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { GameCard } from '../components/GameCard';
import { useForm } from '../../hooks/useForm';
import { useEffect, useState } from 'react';
import { usePublishersExport } from "../hooks/usePublishersExport";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q: query = '' } = queryString.parse(location.search);
  
  const [games, setGames] = useState([]);
  const { games: allGames } = usePublishersExport(); // Mueve el hook aquí
  
  const getGamesByName = (name = '') => {
    name = name.trim().toLowerCase();
    if (name.length === 0) return [];
    return allGames.flatMap(publisher => publisher.games)
                   .filter(game => game.name.toLowerCase().includes(name));
  };

  useEffect(() => {
    const fetchGames = () => {
      const fetchedGames = getGamesByName(query);
      setGames(fetchedGames);
    };
    
    fetchGames();
  }, [query, allGames]); // Dependencias: query y allGames

  const { searchText, onInputChange } = useForm({
    searchText: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
      
    navigate(`?q=${searchText}`);
  };

  return (
    <Container className="text-center mt-5" style={{ backgroundColor: '#1a1a2e', borderRadius: '10px', padding: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
      <h1 className="animate__animated animate__bounceInDown text-light">¡Encuentra tu juego!</h1>
      <Form onSubmit={onSearchSubmit} className="animate__animated animate__fadeIn">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar juegos..."
            className="rounded-pill"
            name='searchText'
            value={searchText}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button
          type="submit"
          className="rounded-pill"
          style={{
            backgroundColor: '#0c153b',
            borderColor: '#0c153b',
            padding: '10px 20px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          Buscar
        </Button>
      </Form>

      { games.length > 0 ? (
        <Card className='mt-4'>
          <Card.Body>
            <h4 className="text-primary">Resultados</h4>
            { games.map(game => (
              <GameCard key={game.id} {...game}/>
            )) }
          </Card.Body>
        </Card>
      ) : (
        <Card className='mt-4'>
          <Card.Body>
            <div className='alert alert-danger'>  
              No existe el juego <b>{ query } </b> aca :c
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
