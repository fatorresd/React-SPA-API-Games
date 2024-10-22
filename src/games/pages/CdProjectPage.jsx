import { PublisherDetails } from "../components";
import { Container } from 'react-bootstrap';

export const CdProjectPage = () => {
  return (
    <>
    <Container className="text-center mt-4">
      <h1 className="gamer-title">Explora el Universo de CD projekt Red: Innovación en Historia</h1>
      <hr />
      <PublisherDetails publisher='cd-projekt-red'/>
    </Container>
  </>
  )
}
