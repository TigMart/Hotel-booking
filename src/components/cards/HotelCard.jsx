import Card from 'react-bootstrap/Card';
import { BiBed } from 'react-icons/bi';
import { BiCalendarAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { diffDays } from '../../actions/hotels';
import moment from 'moment/moment';

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
          for {diffDays(hotel.from, hotel.to)}{' '}
          {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed /> {hotel.bed} bed
        </Card.Text>
        <Card.Text className="text-muted ">
          <small>
            Available from {new Date(hotel.from).toLocaleDateString()}
          </small>
        </Card.Text>
        <Card.Text className="text-muted ">
          <small>
            <i>Posted {moment(hotel.createdAt).fromNow()}</i>
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
