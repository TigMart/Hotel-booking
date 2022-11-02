import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sellerHotels } from '../../actions/hotels';

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
          className="d-flex justify-content-between align-items-center"
        >
          <h3 className="mb-0">Your hotels</h3>
          <Link to="/hotels/new" className="btn btn-primary">
            + Add Hotel
          </Link>
        </Col>
      </Row>
      <div className="d-flex justify-content-center align-items-center vh-50">
        <h4 className="text-muted">No Hotels Found!</h4>
      </div>
    </>
  );
};

export default Connected;
