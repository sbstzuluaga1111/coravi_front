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
          
            <div className="card-front">
            <img className='imagen3' src={image2} alt="" />
            <h3 className="textimgina">Urbanismo</h3>
            </div>
            
          
        </div>

        <div className="card">
          
            <div className="card-front">
            <img className='imagen3' src={image3} alt="" />
            <h3 className="textimgina">Vivienda</h3>
            </div>
        
          
        </div>

        <div className="card">
          
            <div className="card-front">
            <img className='imagen3' src={image4} alt="" />
            <h3 className="textimgina">Comercio</h3>
            </div>
            
          
        </div>

        <div className="card">  
            <div className="card-front">
            <img className='imagen3' src={image5} alt="" />
            <h3 className="textimgina">Interiores</h3>
            </div>
        </div>
      </div>
      <div className="espesiood">

      <h1>¿Tantas ideas te han inspirado?</h1>
      <button className='hablame ' onClick={handleWhatsAppClick}>HAGAMOSLO REALIDAD</button>
      </div>
    </div>
  );
};

export default page2;
