import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import a1 from "../../img/PAGINA WEB/a1.jpg";
import a2 from "../../img/PAGINA WEB/a2.jpg";
import a3 from "../../img/PAGINA WEB/a3.jpg";
import { Carousel } from 'react-bootstrap';

const Asesoria = () => {

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
          <h1 className="monserat titulos">ASESORIA ARQUITECTONICA</h1>
          <p className="bonscript">
            Ofrecemos servicios de asesoría arquitectónica diseñados para
            aquellos verdaderos entusiastas que ven la arquitectura como una
            expresión de arte y funcionalidad. No somos para cualquiera; somos
            para aquellos que buscan soluciones arquitectónicas sobresalientes y
            personalizadas.
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
      src={a1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={a2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={a3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
</div>
  );
};

export default Asesoria;
