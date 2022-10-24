import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { diffDays, getHotelById } from '../../actions/hotels';
import { toast } from 'react-toastify';
import { BiBed, BiCalendarAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';

const SingleHotel = () => {
  const [hotel, setHotel] = useState({});
  const params = useParams();

  useEffect(() => {
    getSingleHotel();
  }, []);

  const getSingleHotel = async () => {
    try {
      const res = await getHotelById(params.id);
      console.log(res);
      if (res.data) {
        setHotel(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <>
      {Object.keys(hotel).length && (
        <Container className="mt-4">
          <Row>
            <Col className="md-6">
              <img
                className="w-100"
                src={`${import.meta.env.VITE_APP_API}/hotel/image/${params.id}`}
                alt={hotel.title}
              />
            </Col>
            <Col className="md-6">
              <h2>{hotel.title}</h2>
              <p>{hotel.content}</p>
              <p>
                <GoLocation />
                {hotel.location}
              </p>
              <p>
                <BiCalendarAlt />
                for {diffDays(hotel.from, hotel.to)}{' '}
                {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
              </p>
              <p>
                <BiBed />
                {hotel.bed}
              </p>
              <small>
                Available from {new Date(hotel.from).toLocaleDateString()}
              </small>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingleHotel;
