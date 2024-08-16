import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "../components/PageNavigation";
import Card from "react-bootstrap/Card";
import { BASE_URL } from "./utils";
import "./MyEvents.css"; // Ensure this file includes the updated CSS

function MyEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/events/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);

  const handleBuyClick = (event) => {
    navigate("/purchased-event", { state: { event } });
  };

  return (
    <>
      <PageNavigation />
      <p>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Arial Black",
            marginTop: "3.5vh",
            color: "brown",
          }}
        >
          THE HOTTEST EVENTS
        </h1>
      </p>

      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id}>
              <Card
                style={{
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                  position: "relative", // Ensure positioning for button
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{ height: "370px", width: "280px" }}
                />
                <Card.Body style={{ height: "220px", position: "relative" }}>
                  <Card.Title>
                    <p>
                      <em>{event.name}</em>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <i className="bi bi-calendar3">{event.datetime}</i>
                  </Card.Text>
                  <Card.Text>
                    <i className="bi bi-geo-alt"> {event.location}</i>
                  </Card.Text>

                  {/* Display the price if available */}
                  {event.price && (
                    <Card.Text>
                      <strong>Price: KES {event.price}</strong>
                    </Card.Text>
                  )}

                  {/* Add the Buy Tickets button here */}
                  <div className="button">
                    <a
                      id="buy"
                      href=""
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleBuyClick(event);
                      }}
                    >
                      Buy Tickets
                    </a>
                    <div id="btn_back"></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default MyEvents;
