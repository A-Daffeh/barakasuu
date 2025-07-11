import { Card, Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../utils/SectionHeader";
import { useEffect } from "react";

const contents = [
  {
    image: "/images/family.jpg",
    name: "Personalized Care Approach",
    description:
      "Each resident is unique and so is their care. Our team develops personalized care strategies to support both independence and well-being every day.",
  },
  {
    image: "/images/family.jpg",
    name: "Compassionate, Skilled Staff",
    description:
      "Our caregivers are not just trained, they're deeply committed to nurturing lives with patience, professionalism, and genuine warmth.",
  },
  {
    image: "/images/family.jpg",
    name: "Comfort-Focused Living",
    description:
      "Our living spaces are thoughtfully designed to foster calm, safety, and belonging, creating an environment that truly feels like home.",
  },
  {
    image: "/images/family.jpg",
    name: "Meaningful Daily Engagement",
    description:
      "We offer enriching daily activities that promote joy, creativity, connection, and mental stimulation—keeping residents engaged and thriving.",
  },
];


const About = () => {

    useEffect(() => {
        document.title = "About Us | Baraka Suu Adult Family Home";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
            "content",
            "Learn about Baraka Suu Adult Family Home's mission and vision - a sanctuary of compassionate care and meaningful living."
            );
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content =
            "Learn about Baraka Suu Adult Family Home's mission and vision - a sanctuary of compassionate care and meaningful living.";
            document.head.appendChild(meta);
        }
    }, []);

    return (
        <>
            <SectionHeader
                heading="About"
                highlight="Us"
                paragraph="Baraka Suu Adult Family Home is more than just a place to live, it's a place to belong. 
                    Rooted in compassion and guided by a deep respect for every individual, our home 
                    in Stanwood, WA, is dedicated to nurturing the physical, emotional, and spiritual well-being 
                    of each resident. We provide a safe, enriching, and culturally respectful environment where 
                    seniors can thrive with dignity and purpose. Our care model centers on trust, empathy, and 
                    genuine connection because to us, every resident is family."
            />

            <Container className="my-5">
                <Row className="g-4">
                    <Col md={6}>
                        <Card className="h-100 shadow-sm border-0 card-custom-bg">
                            <Card.Body className="p-0">
                                <img src="/images/family.jpg" 
                                alt="Home Owners" 
                                className="card-img-fixed w-100 rounded" 
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100 shadow-sm border card-custom-bg">
                            <Card.Body>
                                <Card.Title className="text-center fw-bold">Our Vision & Mission</Card.Title>
                                <br />
                                <Card.Text>
                                    <strong style={{ color: '#D4AF37' }}>Our Mission</strong> is to provide a nurturing, home-like environment
                                     where older adults receive the individualized care, respect, and attention 
                                     they deserve. We strive to enrich lives through compassion, cultural sensitivity,
                                      and meaningful relationships.
                                    <br /><br />
                                    <strong style={{ color: '#D4AF37' }}>Our Vision</strong> is to be a trusted sanctuary of care — a place 
                                    where every resident is valued, every day is purposeful, and every moment 
                                    reflects the blessing of being part of a family.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div className="section-highlight-green">
                <SectionHeader
                    heading="Follow"
                    highlight="Us"
                    paragraph="Stay connected with Baraka Suu Adult Family Home on social media!"
                />
                <Container className="text-center my-5">
                    <div className="d-flex justify-content-center gap-4 mt-3">
                        <a href="https://www.facebook.com/people/Baraka-Suu-Adult-Family-Home-LLC/61578253918226/?mibextid=wwXIfr&rdid=gzr7Jv40NgYyQxRB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LcccBwGzf%2F%3Fmibextid%3DwwXIfr"
                         target="_blank" 
                         rel="noopener noreferrer">
                        <img src="/images/facebook.png" alt="Facebook" width="30" />
                        </a>
                        <a href="https://www.instagram.com/barakasuuafh?igsh=MTU2NzZiMnk3bzJs&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram.png" alt="Instagram" width="30" />
                        </a>
                    </div>
                </Container>
            </div>

            
            <SectionHeader 
                heading="Why Choose" 
                highlight="Baraka Suu Adult Family Home" 
                paragraph="We believe every resident deserves a safe, enriching environment where they can truly feel at home. Here's what makes us stand out:" 
            />

            <Container className="my-5">
                <Row className="g-4">
                    {contents.map((content, index) => (
                    <Col md={3} key={index}>
                        <Card className="h-100 shadow-sm border card-custom-bg">
                            <Card.Img variant="top" src={content.image} alt={content.name} />
                            <Card.Body>
                                <Card.Title className="fw-bold fs-6">{content.name}</Card.Title>
                                <hr />
                                <Card.Text>{content.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
            
        </>
    )
}

export default About;