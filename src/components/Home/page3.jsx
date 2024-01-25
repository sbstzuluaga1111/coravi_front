import React, { useEffect, useRef } from "react";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import "../../App.css";

const Servicios = () => {
  const ref = useRef();

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

  return (
    <div>
      <div className="contenttt" ref={ref}>
        <div className="textoyuuu">
          <p>ARQUITECTURA - MOBILIARIO - CONSTRUCCIÓN - INVERSIONES</p>
          <h1 className="texttt">TODO EN UN SOLO LUGAR</h1>

          <p>RECIBE LAS OFERTAS ANTES QUE NADIE</p>
          <button className="hablame">SUSCRIBETE GRATIS</button>
          <div className="generalbuton">
            <div className="atencion">
              <h3>Horario de atención</h3>
              <div className="center">
                <h5>Lun a Vie: 8:00 am - 7:00pm</h5>
                <h5>Sab - Dom: 8:00 am - 1:00pm</h5>
              </div>
              <div className="redes">
                <button className="watsappbutton">
                  <img className="watsappimaa" src={insta} alt="" />
                </button>
                <button className="watsappbutton">
                  <img className="watsappimaa face" src={face} alt="" />
                </button>
                <button className="watsappbutton">
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
              src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
              alt=""
            />
            <div className="contentimage1">
              <button className="bututu">DIGITACIÓN</button>
            </div>
          </div>

          <div className="imacontent">
            <img
              className="imagen2"
              src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
              alt=""
            />
            <div className="contentimage1">
              <button className="bututu">INMOBILIARIA</button>
            </div>
          </div>

          <div className="imacontent">
            <img
              className="imagen2"
              src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
              alt=""
            />
            <div className="contentimage1">
              <button className="bututu">CONSTRUCCIÓN</button>
            </div>
          </div>

          <div className="imacontent">
            <img
              className="imagen2"
              src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
              alt=""
            />
            <div className="contentimage1">
              <button className="bututu">ASESORIA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
