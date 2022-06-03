import { Carousel } from 'react-bootstrap';

export default function CarouselDB(props) {

  let project = props.data.map((el, idx) => {
    return <Carousel.Item key={idx}>
      
      <img
        className={el.className}
        src={el.src}
        alt={el.alt}
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>{el.description}</p> */}
      </Carousel.Caption>
    </Carousel.Item>;
  })

  return (
    <>
      <Carousel fade>
        {project}
      </Carousel>
    </>
  );
}
