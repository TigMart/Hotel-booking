import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sellerHotels } from '../../actions/hotels';
import HotelCard from '../cards/HotelCard';

const Connected = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [hotels, setHotels] = useState([]);

  const getSellerHotels = async () => {
    try {
      const res = await sellerHotels(token);
      if (res.data) {
        setHotels(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  useEffect(() => {
    getSellerHotels();
  }, []);

  return (
    <>
      <Row className="mt-4">
        <Col
          md={12}
          className="mb-4 d-flex justify-content-between align-items-center"
        >
          <h3 className="mb-0">Your hotels</h3>
          <Link to="/hotels/new" className="btn btn-primary">
            + Add Hotel
          </Link>
        </Col>
      </Row>
      <Container>
        <Row>
          {hotels && hotels.length ? (
            hotels.map((hotel) => {
              return (
                <Col key={hotel._id} md={3}>
                  <Link
                    to={`/hotels/${hotel._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <HotelCard hotel={hotel} />
                  </Link>
                </Col>
              );
            })
          ) : (
            <div>No Hotels</div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Connected;
