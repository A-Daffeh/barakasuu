import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import SectionHeader from "../utils/SectionHeader";

const Contact = () => {
    return (
        <>
            <SectionHeader
                heading="We'd Love to"
                highlight="Hear From You"
                paragraph="Whether you're exploring care options for a loved one or simply have questions, 
                we're here to help. Reach out and let's start a conversation about the compassionate care 
                we provide at Baraka Suu."
            />

            {/* Contact Info and Form */}
            <Container className="my-5">
                <Row className="g-4">

                    {/* Left: Contact Info */}
                    <Col md={6}>
                        <div className="p-4 shadow rounded bg-white text-center">
                            <div className="mb-4">
                                <div className="icon-circle mx-auto mb-2">
                                    <GeoAlt size={24} color="#001f3f" />
                                </div>
                                <p className="mb-0 fw-bold">Address</p>
                                <p>27913 76th DR NW<br />Stanwood, WA 98292</p>
                            </div>

                            <div className="mb-4">
                                <div className="icon-circle mx-auto mb-2">
                                    <Envelope size={24} color="#001f3f" />
                                </div>
                                <p className="mb-0 fw-bold">Email</p>
                                <p>barakasuu@adultfamilyhome.com</p>
                            </div>

                            <div>
                                <div className="icon-circle mx-auto mb-2">
                                    <Telephone size={24} color="#001f3f" />
                                </div>
                                <p className="mb-0 fw-bold">Phone</p>
                                <p>(206) 446-7544</p>
                            </div>
                        </div>
                    </Col>

                    {/* Right: Contact Form */}
                    <Col md={6}>
                        <h5 className="fw-bold text-center mb-3">Send Us a Message</h5>
                        <div className="p-4 shadow rounded bg-white">
                            <Form>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="message">
                                    <Form.Control as="textarea" rows={7} placeholder="Your Message" />
                                </Form.Group>

                                <div className="text-center">
                                    <Button
                                        style={{ backgroundColor: '#001f3f', border: 'none' }}
                                        type="submit"
                                        className="px-4"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Embedded Map */}
            <Container fluid className="p-0">
                <iframe
                    title="Baraka Suu Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.9180923042177!2d-122.3389555235457!3d48.246704143557636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54855c63caa071ad%3A0x84f5458534ea6d97!2s27913%2076th%20Dr%20NW%2C%20Stanwood%2C%20WA%2098292!5e0!3m2!1sen!2sus!4v1749834492292!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Container>
        </>
    );
};

export default Contact;
