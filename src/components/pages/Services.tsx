import { Card, Col, Container, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../utils/SectionHeader";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const contents = [
  {
    image: "/images/family.jpg",
    name: "Thoughtful Amenities",
    description:
      "From cozy living areas to peaceful gardens, every feature in our home is designed to promote comfort, engagement, and well-being. We prioritize spaces that feel inviting, safe, and truly home-like.",
  },
  {
    image: "/images/family.jpg",
    name: "Dedicated Care Team",
    description:
      "Our compassionate caregivers are the heart of Baraka Suu. With hands-on support, attentive listening, and heartfelt care, they ensure every resident is seen, heard, and cared for as family.",
  },
  {
    image: "/images/family.jpg",
    name: "Holistic Services",
    description:
      "We provide 24/7 care tailored to individual needs from personal assistance and medication management to nutritious meals, housekeeping, and social activities that uplift and connect.",
  },
];

const Services = () => {
  return (
    <>
      <SectionHeader
        heading="What We"
        highlight="Offer"
        paragraph="Our services are built to support not just daily needs, but lifelong dignity, joy, and comfort."
      />

      <Container className="mb-5">
        <Row>
          <Col md={6}>
            <ul>
              <li>Comprehensive safety features, including 24/7 security monitoring</li>
              <li>Emergency response systems</li>
              <li>Medication management</li>
              <li>Personal care</li>
              <li>Dementia</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul>
              <li>Nutritional dining services, including meal preparation, dietary accommodations</li>
              <li>Engaging exercise, recreational activities, and creative hobbies</li>
              <li>Incontinence support and hygiene care</li>
              <li>Housekeeping and laundry services</li>
              <li>Transportation</li>
            </ul>
          </Col>
        </Row>
      </Container>


      <Container className="my-5">
        <Row className="g-4">
          {contents.map((content, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm text-center p-3 border card-custom-bg">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 fs-5">{content.name}</Card.Title>
                  <img
                    src={content.image}
                    alt={content.name}
                    className="img-fluid mb-3 rounded"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <Card.Text>{content.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <SectionHeader
        heading="Our"
        highlight="Home"
        paragraph="Baraka Suu is more than a care facility - it's a place of peace, personality, and purpose. 
        Our thoughtfully arranged rooms, shared spaces, and natural surroundings encourage connection and 
        comfort at every turn."
      />

      <div className="my-3">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showThumbnails={true}
          showBullets={true}
          slideDuration={450}
        />
      </div>

      {/* Join Our Team */}
      <div className="section-highlight-green">
        <Container className="my-5">
          <Row>
            <Col md={8}>
              <h2 className="section-header">
                Join Our <span className="section-header-brand" style={{ color: '#D4AF37' }}>Team</span>
              </h2>
              <p>
                Do you have a heart for service and compassion? Baraka Suu is always looking for caregivers who value connection and community. Be part of a team that truly makes a difference in the lives of others.
              </p>
              <p>
                Send your resume to{" "}
                <a
                  href="mailto:careers@barakasuuafh.com"
                  className="fw-bold fs-6"
                  style={{ color: "#D4AF37" }}
                >
                  careers@barakasuuafh.com
                </a>{" "}
                to apply.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Join our team"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
