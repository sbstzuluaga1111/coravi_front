import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";

const Asesoria = () => {
  return (
    <div className="">
      <Nav />
      <div className="separate">
        <div className="textoyuuu tero">
          <h1 className="texttt">ASESORIA ARQUITECTONICA</h1>
          <p>
            Ofrecemos servicios de asesoría arquitectónica diseñados para
            aquellos verdaderos entusiastas que ven la arquitectura como una
            expresión de arte y funcionalidad. No somos para cualquiera; somos
            para aquellos que buscan soluciones arquitectónicas sobresalientes y
            personalizadas.
          </p>
          <button className="hablame tp">HABLA CON UN ASESOR</button>
          <div className="generalbuton">
            <div className="atencion">
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
        <img
          className="servima"
          src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Asesoria;