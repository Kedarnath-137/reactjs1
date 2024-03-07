import Carousel from 'react-bootstrap/Carousel';
import Styling2 from '../cssstyles/text.module.css';

const Carousel12 = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            width={1500}
            height={500}
          ></img>

          <Carousel.Caption>
            <h3 className={Styling2.kedar}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width={1500}
            height={500}
          ></img>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width={1300}
            height={500}
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className={Styling2.kedar}>saiiiiii</h1>
    </>
  );
};
export default Carousel12;
