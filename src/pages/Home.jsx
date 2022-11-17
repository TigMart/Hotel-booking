import Hotels from '../components/Hotels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from '../components/Search';

const Home = () => {
  return (
    <Container>
      <Row>
        <Search />
      </Row>
      <Row>
        <Hotels />
      </Row>
    </Container>
  );
};

export default Home;
