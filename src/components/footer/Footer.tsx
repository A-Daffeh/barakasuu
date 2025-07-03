import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  ClockFill,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#003366", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Row className="text-white text-center text-md-start g-4">
          {/* Logo & About */}
            <Col md={4}>
                <h5 className="fw-bold">Baraka Suu Adult Family Home</h5>
                <p>Home Of Blessings</p>
                <p>Compassionate care in a welcoming, home-like environment.</p>
            </Col>

          {/* Contact Info */}
            <Col md={4}>
                <h6 className="fw-bold mb-3">Contact Info</h6>
                <p><GeoAltFill className="me-2" />27913 76th DR NW, Standwood WA 98292</p>
                <p><TelephoneFill className="me-2" /> (206) 446-7544</p>
                <p><EnvelopeFill className="me-2" /> barakasuu@adultfamilyhome.com</p>
            </Col>


        {/* Hours */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Reach Us</h6>
            <p><ClockFill className="me-2" /> Monday to Sunday</p>
            <p className="ms-4">9:00 am - 5:00 pm</p>
            <p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                    <img src="/images/facebook.png" alt="Facebook" width="24" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="Instagram" width="24" />
                </a>
            </p>

          </Col>

          {/* Navigation */}
            <Col md={2}>
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <Nav className="flex-column">
                <Nav.Link
                    as={NavLink}
                    to="/"
                    className="footer-link"
                >
                    Home
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/about"
                    className="footer-link"
                >
                    About
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/services"
                    className="footer-link"
                >
                    Services
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/contact"
                    className="footer-link"
                >
                    Contact Us
                </Nav.Link>
                </Nav>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
