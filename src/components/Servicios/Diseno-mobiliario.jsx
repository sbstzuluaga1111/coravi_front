import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import e1 from "../../img/PAGINA WEB/home4.jpg";
import e2 from "../../img/PAGINA WEB/e2.jpg";
import e3 from "../../img/PAGINA WEB/e3.jpg";
import e4 from "../../img/PAGINA WEB/e4.jpg";
import e5 from "../../img/PAGINA WEB/e5.jpg";
import { Carousel } from 'react-bootstrap';

const Mobiliario = () => {

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
          <h1 className="texttt">DISEÑO DE MOBILIARIO</h1>
          <p>
            Desde elegantes piezas de mobiliario residencial hasta soluciones
            personalizadas para espacios comerciales, nuestro equipo demuestra
            consistentemente su capacidad para superar las expectativas.
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
      src={e1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={e2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={e3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={e4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={e5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
    </div>
  );
};

export default Mobiliario;
