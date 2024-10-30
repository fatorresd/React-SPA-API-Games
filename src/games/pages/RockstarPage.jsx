import { PublisherDetails } from "../components";
import { Container } from 'react-bootstrap';
import '../../RockstarPage.css'; // Asegúrate de tener un archivo CSS para aplicar estilos


export const RockstarPage = () => {
  return (
    <>
      <Container className="text-center mt-4">
      <h1 className="gamer-title">Explora el Universo de Rockstar: Innovación en Jugabilidad</h1>
      <hr />
      <PublisherDetails publisher='Rockstar Games'/>
      </Container>


    </>
  )
}

