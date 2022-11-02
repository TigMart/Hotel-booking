import Hotels from '../components/Hotels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
