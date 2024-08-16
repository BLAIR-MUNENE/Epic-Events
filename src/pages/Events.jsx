import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "../components/PageNavigation";
import Card from "react-bootstrap/Card";
import { BASE_URL } from "./utils";

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [loadingEventId, setLoadingEventId] = useState(null); // State for loading effect
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
    setLoadingEventId(event.id); // Set loading for the clicked event
    setTimeout(() => {
      navigate("/purchased-event", { state: { event } });
      setLoadingEventId(null); // Reset loading state after navigation
    }, 1000); // Simulate a delay for the loading effect
  };

  return (
    <>
      <PageNavigation />
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

      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id}>
              <Card
                style={{
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                  position: "relative",
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
                  {event.price && (
                    <Card.Text>
                      <strong>Price: KES {event.price}</strong>
                    </Card.Text>
                  )}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => handleBuyClick(event)}
                      disabled={loadingEventId === event.id}
                      style={{
                        backgroundColor: "#007bff",
                        border: "none",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, transform 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {loadingEventId === event.id ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderWidth: "0.2em",
                          }}
                        ></span>
                      ) : (
                        "Buy Tickets"
                      )}
                    </button>
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
