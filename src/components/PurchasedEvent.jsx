import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PageNavigation from "./PageNavigation";
import "./PurchasedEvent.css";

function PurchasedEvent() {
  const location = useLocation();
  const { event } = location.state || {};

  if (!event) {
    return <div>No event selected</div>;
  }

  const handleBuyNow = () => {
    // Redirect to the external URL
    window.location.href = "https://desolate-ridge-69417-63835eb682ea.herokuapp.com/";
  };

  return (
    <>
      <PageNavigation />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={{ marginTop: "20px" }}>
              <Card.Img
                variant="top"
                src={event.image}
                style={{ height: "370px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  <i className="bi bi-calendar3">{event.datetime}</i>
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-geo-alt"> {event.location}</i>
                </Card.Text>
                <Card.Text>
                  <strong>Price: KES{event.capacity}</strong>
                </Card.Text>
                <button className="btn" onClick={handleBuyNow}>
                  <span className="btn__visible">Buy Now</span>
                  <span className="btn__invisible">Only 2 Left</span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PurchasedEvent;
