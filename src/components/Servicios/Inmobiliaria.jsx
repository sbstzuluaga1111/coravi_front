import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import g1 from "../../img/PAGINA WEB/g1.jpg";
import g2 from "../../img/PAGINA WEB/g2.jpg";
import g3 from "../../img/PAGINA WEB/g3.jpg";
import g4 from "../../img/PAGINA WEB/g4.jpg";
import g5 from "../../img/PAGINA WEB/g5.jpg";
import { Carousel } from 'react-bootstrap';

const Inmobiliaria = () => {

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
          <h1 className="monserat titulos">VENTA DE PROPIEDADES</h1>
          <p className="bonscript">
            Nuestro compromiso va dirigido a convertir sueños de hogar y
            oportunidades de inversión en experiencias tangibles, guiando a
            nuestros clientes a través del proceso con profesionalismo y
            atención personalizada.
          </p>
          <button onClick={handleWhatsAppClick} className="hablame tp bonscript">HABLA CON UN ASESOR</button>
          <div className="generalbuton">
            <div className="atencion">
              <div className="redes rin">
                <button  onClick={handleWhatsAppClick1} className="watsappbutton">
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
      src={g1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={g2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={g3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={g4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={g5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
    </div>
  );
};

export default Inmobiliaria;
