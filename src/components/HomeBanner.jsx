import "../Home.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div>
      <div className="home-banner">
        <div>
          <h3>One Stop</h3>
        </div>
        <div>
          <p>
            <em>Event Planner</em>
          </p>
        </div>
        <div>
          <h2>Every Event Is Toptear</h2>
        </div>
        <div className="mb-2">
          <Button
            variant="outline-info"
            size="lg"
            style={{ marginRight: "45vh" }}
          >
            <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
              About Us
            </Link>
          </Button>
          <Button variant="outline-success" size="lg">
            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;

