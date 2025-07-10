import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navig = () => {
    return (
        <Navbar className="custom-navbar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/images/barakasuu-logo.png"
                        alt="Baraka Suu Logo"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/" className="fs-5">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="fs-5">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="fs-5">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="fs-5">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navig;
