import Card from 'react-bootstrap/Card';
import { BiBed } from 'react-icons/bi';
import { BiCalendarAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';

const HotelCard = ({ hotel }) => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
      />
      <Card.Body>
        <Card.Title>{hotel.title}</Card.Title>
        <Card.Text className="mb-2">
          <GoLocation />
          {hotel.location}
        </Card.Text>
        <Card.Text className="mb-2">
          <BiCalendarAlt />
          for 7 days
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed /> {hotel.bed} bed
        </Card.Text>
        <Card.Text className="text-muted ">
          <small>Available from 10/19/2022</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
