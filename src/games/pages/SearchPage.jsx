import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'animate.css';

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para buscar juegos
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="animate__animated animate__bounceInDown">¡Encuentra tu juego!</h1>
      <Form onSubmit={handleSearchSubmit} className="animate__animated animate__fadeIn">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar juegos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="rounded-pill"
            style={{
              borderColor: '#0c153b',
              backgroundColor: '#00000',
              color: '#ffffff',
            }}
          />
        </Form.Group>
        <Button
          type="submit"
          className="rounded-pill"
          style={{
            backgroundColor: '#0c153b',
            borderColor: '#0c153b',
          }}
        >
          Buscar
        </Button>
      </Form>
    </Container>
  );
};
