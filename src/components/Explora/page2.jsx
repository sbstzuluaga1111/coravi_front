import React from "react";
import "../../App.css";
import image2 from '../../img/PAGINA WEB/explora1.jpg'
import image3 from '../../img/PAGINA WEB/explora2.jpg'
import image4 from '../../img/PAGINA WEB/explora3.jpg'
import image5 from '../../img/PAGINA WEB/explora4.jpg'

const page2 = () => {

    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send?phone=573215513300', '_blank');
      };

  return (
    <div className="App-header explora">
      

      <div className="containCards">
        <div className="card">

          <a href="https://my.archdaily.co/co/@coravi/folders/referencias-urbanismo" target="_blank" rel="noopener noreferrer">
            <div className="card-front">
            <img className='imagen3' src={image2} alt="" />
            <h3 className="textimgina monserat">Urbanismo</h3>
            </div>
          </a>
          
        </div>

        <div className="card">
        <a href="https://my.archdaily.co/co/@coravi/folders/referencias-vivienda" target="_blank" rel="noopener noreferrer">
            <div className="card-front">
            <img className='imagen3' src={image3} alt="" />
            <h3 className="textimgina monserat">Vivienda</h3>
            </div>
          </a>
          
        </div>

        <div className="card">
        <a href="https://my.archdaily.co/co/@coravi/folders/referencias-comercio" target="_blank" rel="noopener noreferrer">
            <div className="card-front">
            <img className='imagen3' src={image4} alt="" />
            <h3 className="textimgina monserat">Comercio</h3>
            </div>
            </a>
          
        </div>

        <div className="card">  
        <a href="https://my.archdaily.co/co/@coravi/folders/referencias-interiores" target="_blank" rel="noopener noreferrer">
            <div className="card-front">
            <img className='imagen3' src={image5} alt="" />
            <h3 className="textimgina monserat">Interiores</h3>
            </div>
           </a>
        </div> 
      </div>
      <div className="espesiood">

      <p className="monserat titulos">¿Tantas ideas te han inspirado?</p>
      <button className='hablame bonscript ttuit' onClick={handleWhatsAppClick}>HAGÁMOSLO REALIDAD</button>
      </div>
    </div>
  );
};

export default page2;
