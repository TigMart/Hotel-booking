import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import HotelCard from "../components/cards/HotelCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        {[...Array(6)].map((hotel, index) => {
          return (
            <Col key={index} md={4}>
              <Link
                to={`/hotels/${index}`}
                className="text-decoration-none text-dark"
              >
                <HotelCard />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
