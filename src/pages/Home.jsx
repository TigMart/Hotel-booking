import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Hotels from '../components/Hotels';

const Home = () => {
  return (
    <Container>
      <Row>
        <Hotels />
      </Row>
    </Container>
  );
};

export default Home;
