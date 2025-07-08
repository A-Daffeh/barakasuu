import './SlideShow.css'
import Carousel from 'react-bootstrap/Carousel';

const SlideShow = () => {
  return (
    <>
        <Carousel>
            
            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img src="/images/slide1.jpg" className="d-block w-100 carousel-image" />
                    <div className='carousel-overlay'></div>
                </div>
               
                <Carousel.Caption>
                    <h3 className='fw-bold fst-italic'>Home of Blessings</h3>
                    <p>We provide a nurturing environment where every resident feels valued and at home.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img src="/images/slide2.jpeg" className="d-block w-100 carousel-image" />
                    <div className='carousel-overlay'></div>
                </div>
                
                <Carousel.Caption>
                    <h3 className='fw-bold fst-italic'>Where Care Feels Like Family</h3>
                    <p>Dedicated caregivers. Peaceful surroundings. A place where hearts feel safe.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img src="/images/slide3.webp" className="d-block w-100 carousel-image" />
                    <div className='carousel-overlay'></div>
                </div>
                
                <Carousel.Caption>
                    <h3 className='fw-bold fst-italic'>Where Love Meets Care </h3>
                    <p>Your loved ones deserve care wrapped in compassion, dignity, and love.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    </>
  );
}

export default SlideShow;