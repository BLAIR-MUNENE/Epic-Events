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
    window.location.href = "https://obscure-river-18723-73b74f1b3ff5.herokuapp.com/";
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
                  <strong>Price: KES {event.capacity}/=</strong>
                </Card.Text>
                {/* Added event description */}
                <Card.Text>
                  <strong>Description:</strong> {event.description}
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

      <footer
        style={{
          backgroundColor: "#343a40",
          color: "white",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email: Epicevents@gmail.com
                <br />
                Phone: +254748288593
                <br />
                Address: 123 Main St, City, Country
              </p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" style={{ color: "white" }}>Home</a></li>
                <li><a href="/events" style={{ color: "white" }}>Events</a></li>
                <li><a href="/about-us" style={{ color: "white" }}>About Us</a></li>
                <li><a href="/contact" style={{ color: "white" }}>Contact</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <p style={{ fontSize: "smaller" }}>
                &copy; 2024 Epicevents. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default PurchasedEvent;
