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


  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573215513300', '_blank');
  };

  const handleWhatsAppClick1 = () => {
    window.open('https://www.instagram.com/coravi_arq/', '_blank');
  };

  const handleWhatsAppClick2 = () => {
    window.location.href = 'mailto:serviciocoravi.sas@gmail.com';
  };

  return (
    <div className='App-header nosotros'>
       <div className="separate nosotros padingg">
        <div className="textoyuuu">
          <h1 className=" monserat titulos">UN POCO MAS DE NOSOTROS</h1>
          <p className="bonscript"><img className="watsappimaa black m-2" src={estrella} alt="" />
          Más de 15 años de experiencia.
          </p>
          <p className="bonscript"><img className="watsappimaa black m-2" src={grupo} alt="" />
          15 áreas de especialización a tu disposición.
          </p>
          <p className="bonscript"><img className="watsappimaa black m-2" src={planeta} alt="" />
          Presencia en 7 paises del mundo.
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
        <div className='imacontent'>
        <div className='overlay circu'></div>
          <img className='imagen1' src={image6} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export default page3;