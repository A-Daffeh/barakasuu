import { Card, Col, Container, Row } from "react-bootstrap";
import SlideShow from "../slider/SlideShow";
import { ChatHeart, HeartPulse, House } from "react-bootstrap-icons";
import SectionHeader from "../utils/SectionHeader";

const contents = [
  {
    icon: <HeartPulse />,
    title: "Compassion in Every Interaction",
    description:
      "At Baraka Suu, empathy is the foundation of everything we do. Our caregivers approach every interaction with kindness, treating each resident with the same love and respect they would offer their own family. It's not just care — it's care from the heart.",
  },
  {
    icon: <House />,
    title: "A True Sense of Home",
    description:
      "Every detail of our home is crafted to bring peace, comfort, and a sense of belonging. From the layout of our spaces to the daily routines we follow, Baraka Suu offers a genuine home-like atmosphere where residents can relax and thrive.",
  },
  {
    icon: <ChatHeart />,
    title: "Personalized, Trusted Support",
    description:
      "With a focus on personalized attention, Baraka Suu Adult Family Home provides high-quality, licensed care in a warm and intimate setting. Our smaller community ensures each resident receives the dedicated support and companionship they deserve.",
  },
];

const Home = () => {
    return (
        <>
            <SlideShow />

            <SectionHeader 
                heading="Welcome to" 
                highlight="Baraka Suu Adult Family Home" 
            />

            <Container className="my-5">
                <Row className="g-4">
                    <Col md={6}>
                        <Card className="h-100 shadow-sm border card-custom-bg">
                            <Card.Body>
                                <Card.Title className="fw-bold fst-italic">Home Of Blessings</Card.Title>
                                <br />
                                <Card.Text className="fst-italic">
                                    <strong>&ldquo;</strong>Baraka Suu Adult Family Home LLC is a family owned business run by the Bayo Family. 
                                    Our team consists of 6 dedicated, experienced staff members with years of experience.<strong>&rdquo;</strong>
                                </Card.Text>
                                <Card.Text>
                                    At Baraka Suu Adult Family Home, we welcome your loved ones into an environment 
                                    built on warmth, dignity, and heartfelt care. Our home in Stanwood, Washington, 
                                    offers more than just support — it's a place where compassion flourishes and 
                                    every resident is embraced as part of our extended family. 
                                    Here, comfort and connection come together to create a truly blessed 
                                    living experience. We also support individuals with dimentia, developmental disabilities,
                                    and mental health needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="p-0">
                                <img src="/images/family.jpg" 
                                alt="Home Owners" 
                                className="card-img-fixed w-100 rounded" 
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <Row className="g-4">
                    {contents.map((item, index) => (
                    <Col md={4} key={index}>
                        <Card className="h-100 shadow-sm border card-custom-bg">
                            <Card.Body>
                                <div className="mb-3" style={{ fontSize: "2rem", color: "#D4AF37" }}>
                                {item.icon}
                                </div>
                                <Card.Title className="fw-bold fs-5">{item.title}</Card.Title>
                                <br />
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>


        </>
    )
}

export default Home;