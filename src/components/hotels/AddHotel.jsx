import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const AddHotel = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Hotel</h2>
      </div>
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Loaction</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Number of beds</Form.Label>
                <Form.Select className="mb-3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </Form.Group>

              <RangePicker className="form-control mb-3" />
              
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddHotel;
