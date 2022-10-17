import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const HotelCard = () => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="https://via.placeholder.com/500x400" />
      <Card.Body>
        <Card.Title>Alabtros Palace Sharm</Card.Title>
        <Card.Text className="mb-2">
          <GoLocation />
          Naama Bay, Sharm El Sheikh, Egypt
        </Card.Text>
        <Card.Text className="mb-2">
          <BiCalendarAlt />
          for 7 days
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed />2 bed
        </Card.Text>
        <Card.Text className="text-muted ">
          <small>Available from 10/19/2022</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
