import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import h1 from "../../img/PAGINA WEB/home5.jpg";
import h2 from "../../img/PAGINA WEB/h2.jpg";
import h3 from "../../img/PAGINA WEB/h3.jpg";
import h4 from "../../img/PAGINA WEB/h4.jpg";
import h5 from "../../img/PAGINA WEB/h5.jpg";
import { Carousel } from 'react-bootstrap';

const modelado = () => {

  const handleWhatsAppClick1 = () => {
    window.open('https://www.instagram.com/coravi_arq/', '_blank');
  };

  const handleWhatsAppClick2 = () => {
    window.location.href = 'mailto:serviciocoravi.sas@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573215513300&text=Hola. Quiero comunicarme con ustedes.', '_blank');
  };


  return (
    <div>
      <Nav />
      <div className="separate">
        <div className="textoyuuu tero">
          <h1 className="monserat titulos">MODELADO Y RENDERIZADO</h1>
          <p className="bonscript">
            Creemos que la visualización impactante es esencial para la
            comprensión y la toma de decisiones informadas. Permítenos ser tu
            socio en la creación de experiencias visuales que no solo cumplen
            con estándares profesionales, sino que también inspiran y cautivan.
          </p>
          <button onClick={handleWhatsAppClick} className="hablame tp bonscript">HABLA CON UN ASESOR</button>
          <div className="generalbuton">
            <div className="atencion">
              <div className="redes">
                <button onClick={handleWhatsAppClick1} className="watsappbutton">
                  <img className="watsappimaa" src={insta} alt="" />
                </button>
                <button className="watsappbutton">
                  <img className="watsappimaa face" src={face} alt="" />
                </button>
                <button onClick={handleWhatsAppClick2} className="watsappbutton">
                  <img className="watsappimaa" src={corre} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="containercarusel">
        <Carousel interval={2500} controls={false} indicators={false}>
  <Carousel.Item>
    <img
      className="servima"
      src={h1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={h2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={h3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={h4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={h5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
    </div>
  );
};
export default modelado;
