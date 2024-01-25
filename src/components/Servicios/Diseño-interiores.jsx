import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import Nav from "../Nav";
import "../css/Servicios.css";

const interiores = () => {
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

export default interiores;
