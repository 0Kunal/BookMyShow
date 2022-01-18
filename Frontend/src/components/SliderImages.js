import Carousel from 'react-bootstrap/Carousel'

function SliderImages() {
  return (
    <div>
    <Carousel fade variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://in.bmscdn.com/promotions/cms/creatives/1642418591375_our_ladies.jpg"
            alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://in.bmscdn.com/promotions/cms/creatives/1642404214035_1635399009148_inoxbannerdesktop.jpg"
            alt="Second slide"
            />

            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://in.bmscdn.com/promotions/cms/creatives/1641189495411_1638331721816_1240x300freeaccessbannercopy.png"
            alt="Third slide"
            />

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SliderImages;
