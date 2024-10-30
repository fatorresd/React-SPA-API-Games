import { PublisherDetails } from "../components";
import { Container } from 'react-bootstrap';
import '../../ValvePage.css'; // Asegúrate de tener un archivo CSS para aplicar estilos

export const ValvePage = () => {
  return (
    <Container className="text-center mt-4">
      <h1 className="gamer-title">Explora el Universo de Valve: Innovación en Videojuegos</h1>
      <hr />
      <PublisherDetails publisher='Valve'/>
    </Container>
  );
}
