import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import f1 from "../../img/PAGINA WEB/f1.jpg";
import f2 from "../../img/PAGINA WEB/f2.jpg";
import f3 from "../../img/PAGINA WEB/f3.jpg";
import f4 from "../../img/PAGINA WEB/f4.jpg";
import f5 from "../../img/PAGINA WEB/f5.jpg";
import { Carousel } from 'react-bootstrap';

const Proyectos = () => {

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
          <h1 className="texttt">DISEÑO DE PROYECTOS</h1>
          <p>
            En nuestra esencia está la comprensión profunda de tus necesidades y
            aspiraciones. Trabajamos en estrecha colaboración contigo para
            capturar la esencia de tu visión y traducirla en diseños
            arquitectónicos que no solo cumplen con requisitos prácticos, sino
            que también inspiran.{" "}
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
      src={f1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={f2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={f3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={f4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={f5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel></div>
      </div>
    </div>
  );
};

export default Proyectos;
