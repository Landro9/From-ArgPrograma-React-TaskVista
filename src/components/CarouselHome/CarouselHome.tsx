import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carouselHome.css";

const CarouselHome = ()=> {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex);
    };

    return(
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/assets/Image/slide1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Somos el mejor equipo de Aplicaciones Agilesl</h3>
          <p>Te Brindamos todo el ascesorameinto en Desarrollo de Software</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/Image/slide2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Los mejores expertos del país</h3>
          <p>Trabajamos con las útimas tecnologías del Front y back cada día.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/Image/slide3.jpg" alt="" />
        <Carousel.Caption>
          <h3>Potencia tu negocio con nuestras soluciones personalizadas</h3>
          <p>Desarrollamos software a medida para satisfacer tus necesidades empresariales específicas.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default CarouselHome