import React, { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import "../../App.css";
import '../css/Home3.css';
import imagen6 from '../../img/PAGINA WEB/home6.jpg';
import imagen7 from '../../img/PAGINA WEB/home7.jpg';
import imagen8 from '../../img/PAGINA WEB/home8.jpg';
import imagen9 from '../../img/PAGINA WEB/home9.jpg';
import Suscripcion from "../Suscripcion/Suscripcion";

const Page3 = () => {
  const ref = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;

      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("appear");
        } else {
          element.classList.remove("appear");
        }
      }
    };

    // Agrega un listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://issuu.com/coravi.arq/docs/portafolio_espa_ol', '_blank');
  };

  const handleWhatsAppClick1 = () => {
    window.open('https://www.instagram.com/coravi_arq/', '_blank');
  };

  const handleWhatsAppClick2 = () => {
    window.location.href = 'mailto:serviciocoravi.sas@gmail.com';
  };

  return (
    <div>
      
      <div className="contenttt" ref={ref}>
        <div className="textoyuuu">
          <p className="bonscript">ARQUITECTURA - MOBILIARIO - CONSTRUCCIÓN - INVERSIONES</p>
          <h1 className="monserat titulos">TODO EN UN SOLO LUGAR</h1>

          <p className="bonscript">RECIBE LAS OFERTAS ANTES QUE NADIE</p>
          
          <button onClick={openModal} className="hablame bonscript">SUSCRIBETE GRATIS</button>
          <Suscripcion modalIsOpen={modalIsOpen} closeModal={closeModal} />
          <button onClick={handleWhatsAppClick} className="hablame muvet bonscript">NUESTRO PORTAFOLIO</button>
          <div className="generalbuton">
            <div className="atencion">
              <p className="monserat">Horario de atención</p>
              <div className="center atenciont">
                <p className="bonscript mine">Lun a Vie: 8:00 am - 7:00pm</p>
                <p className="bonscript mine">Sab - Dom: 8:00 am - 1:00pm</p>
              </div>
              <div className="redess">
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

        <div className="containerimgs">
          <div className="imacontent">
            <img
              className="imagen2"
              src={imagen6}
              alt=""
            />
            <NavLink to="/digitacion" className="contentimage1">
              <button className="bututu">DIGITACIÓN</button>
            </NavLink>
          </div>

          <div className="imacontent">
            <img
              className="imagen2"
              src={imagen7}
              alt=""
            />
            <NavLink to="/construccion" className="contentimage1">
              <button className="bututu">CONSTRUCCIÓN</button>
            </NavLink>
          </div>

          <div className="imacontent">
            <img
              className="imagen2"
              src={imagen8}
              alt=""
            />
            <NavLink to="/inmobiliaria" className="contentimage1">
              <button className="bututu">INMOBILIARIA</button>
            </NavLink>
          </div>


          <div className="imacontent">
            <img
              className="imagen2"
              src={imagen9}
              alt=""
            />
            <NavLink to="/asesoria" className="contentimage1">
              <button className="bututu">ASESORIA</button>
            </NavLink>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Page3;
