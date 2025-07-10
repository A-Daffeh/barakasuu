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
    <div className="footer" style={{ backgroundColor: "#d0e8d8", padding: "40px 0" }}>
      <Container>
        <Row className="text-white text-center text-md-start g-4">
          {/* Logo & About */}
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start">
                <img
                  src="/images/barakasuu-logo.png"
                  alt="Baraka Suu Logo"
                  width="300"
                  className="mb-3"
                />
            </Col>

          {/* Contact Info */}
            <Col md={4}>
                <h6 className="fw-bold mb-3">Contact Info</h6>
                <p><GeoAltFill className="me-2" color="#D4AF37" />27913 76th DR NW, Standwood WA 98292</p>
                <p><TelephoneFill className="me-2" color="#D4AF37" /> (360) 436-2518</p>
                <p><EnvelopeFill className="me-2" color="#D4AF37" /> info@barakasuuafh.com</p>
            </Col>


        {/* Hours */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Reach Us</h6>
            <p><ClockFill className="me-2" color="#D4AF37" /> Monday to Sunday</p>
            <p className="ms-4">9:00 am - 5:00 pm</p>
            <p>
                <a href="https://www.facebook.com/people/Baraka-Suu-Adult-Family-Home-LLC/61578253918226/?mibextid=wwXIfr&rdid=gzr7Jv40NgYyQxRB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LcccBwGzf%2F%3Fmibextid%3DwwXIfr" 
                target="_blank" rel="noopener noreferrer" className="me-3">
                    <img src="/images/facebook.png" alt="Facebook" width="24" />
                </a>
                <a href="https://www.instagram.com/barakasuuafh?igsh=MTU2NzZiMnk3bzJs&utm_source=qr" target="_blank" rel="noopener noreferrer">
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
