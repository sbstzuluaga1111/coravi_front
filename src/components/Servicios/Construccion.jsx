import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import b1 from "../../img/PAGINA WEB/b1.jpg";
import b2 from "../../img/PAGINA WEB/b2.jpg";
import b3 from "../../img/PAGINA WEB/b3.jpg";
import b4 from "../../img/PAGINA WEB/b4.jpg";
import b5 from "../../img/PAGINA WEB/b5.jpg";
import { Carousel } from 'react-bootstrap';

const construccion = () => {

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
          <h1 className="monserat titulos">CONSTRUCCIÓN Y ACABADOS</h1>
          <p className="bonscript">
          Nos enorgullece ofrecer servicios integrales de construcción y acabados especiales, llevando a cabo cada proyecto con un compromiso inquebrantable con la excelencia y la atención a los detalles. Desde los cimientos hasta los toques finales, transformamos visiones en estructuras 
          </p>
          <button onClick={handleWhatsAppClick} className="hablame tp bonscript">HABLA CON UN ASESOR</button>
          <div className="generalbuton">
            
              <div className="redes rin">
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
        <div className="containercarusel">
        <Carousel interval={2500} controls={false} indicators={false}>
  <Carousel.Item>
    <img
      className="servima"
      src={b1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={b2}
      alt="Second slide"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="servima"
      src={b3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={b4}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="servima"
      src={b5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

</div>
      </div>
    </div>
  );
};

export default construccion;
