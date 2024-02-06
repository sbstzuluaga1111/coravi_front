import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from "../../img/PAGINA WEB/d1.jpg";
import d2 from "../../img/PAGINA WEB/d2.jpg";
import d3 from "../../img/PAGINA WEB/d3.jpg";
import d4 from "../../img/PAGINA WEB/d4.jpg";
import d5 from "../../img/PAGINA WEB/d5.jpg";
import { Carousel } from 'react-bootstrap';

const interiores = () => {

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
    <div className="">
      <Nav />
      <div className="separate">
        <div className="textoyuuu tero">
          <h1 className="texttt">DISEÑO DE INTERIORES</h1>
          <p>
            Entendemos que el diseño de interiores va más allá de la estética;
            es una expresión de la personalidad y las necesidades del cliente.
            Nuestro enfoque colaborativo comienza escuchándote atentamente para
            entender tus aspiraciones y estilo de vida.
          </p>
          <button onClick={handleWhatsAppClick} className="hablame tp">HABLA CON UN ASESOR</button>
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
      src={d1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={d2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={d3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={d4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={d5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
    </div>
  );
};

export default interiores;
