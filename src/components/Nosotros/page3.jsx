import React from "react";
import "../../App.css";
import insta from "../../img/instagram.png";
import face from "../../img/fase.png";
import corre from "../../img/corre.png";
import image6 from '../../img/PAGINA WEB/nosotros6.jpg'
import estrella from '../../img/estrella-fugaz.png';
import grupo from '../../img/grupo.png';
import planeta from '../../img/planeta-tierra.png'
import "../css/Servicios.css";

const page3 = () => {
  return (
    <div className='App-header nosotros'>
       <div className="separate nosotros padingg">
        <div className="textoyuuu">
          <h1 className="texttt">UN POCO MAS DE NOSOTROS</h1>
          <p><img className="watsappimaa black m-2" src={estrella} alt="" />
          Más de 15 años de experiencia.
          </p>
          <p><img className="watsappimaa black m-2" src={grupo} alt="" />
          24 especialistas en áreas específicas.
          </p>
          <p><img className="watsappimaa black m-2" src={planeta} alt="" />
          Presencia en 5 paises del mundo
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
        <div className='imacontent'>
        <div className='overlay circu'></div>
          <img className='imagen1' src={image6} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export default page3;