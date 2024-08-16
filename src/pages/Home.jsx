import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import PageNavigation from "../components/PageNavigation";
import HomeBanner from "../components/HomeBanner";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils";

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const lastThreeEvents = events.slice(-3);

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

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (event) => {
    navigate("/purchased-event", { state: { event } });
  };

  const feedbacks = [
    {
      id: 1,
      author: "Jane Doe",
      content: "Amazing event! I had a great time. Highly recommend to everyone!",
      date: "2024-08-15"
    },
    {
      id: 2,
      author: "John Smith",
      content: "The event was well-organized, but the venue was a bit crowded.",
      date: "2024-08-14"
    },
    {
      id: 3,
      author: "Alice Johnson",
      content: "Excellent experience. The speakers were very engaging and the activities were fun.",
      date: "2024-08-13"
    }
  ];

  return (
    <>
      <PageNavigation />
      <HomeBanner />

      <h1
        style={{
          fontFamily: "sans-serif",
          fontStyle: "italic",
          color: "InactiveBorder",
          fontSize: "33px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Upcoming Events
      </h1>
      <Container>
        <Row>
          {lastThreeEvents.map((event) => (
            <Col key={event.id}>
              <Card
                style={{
                  cursor: "pointer",
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                }}
                onClick={() => handleCardClick(event)}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{ height: "370px", width: "280px" }}
                />
                <Card.Body style={{ height: "152px" }}>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.datetime}</Card.Text>
                  <Card.Text>{event.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <h1
        style={{
          fontFamily: "sans-serif",
          fontStyle: "italic",
          color: "InactiveBorder",
          fontSize: "33px",
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        What People Are Saying
      </h1>
      <Container>
        <Row>
          {feedbacks.map((feedback) => (
            <Col key={feedback.id} md={4}>
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card.Body>
                  <Card.Title>{feedback.author}</Card.Title>
                  <Card.Text>{feedback.content}</Card.Text>
                  <Card.Footer>
                    <small className="text-muted">{feedback.date}</small>
                  </Card.Footer>
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
                Phone: +25748288593
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
                &copy; 2024 Epic events. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;
