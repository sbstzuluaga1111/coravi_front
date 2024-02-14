import React from "react";
import "../../App.css";
import image2 from '../../img/PAGINA WEB/nosotros2.jpg'
import image3 from '../../img/PAGINA WEB/nosotros3.jpg'
import image4 from '../../img/PAGINA WEB/nosotros4.jpg'
import image5 from '../../img/PAGINA WEB/nosotros5.jpg'

const page2 = () => {
  return (
    <div className="App-header nosotros">
      <p className="monserat titulos">NUESTROS DISTINTIVOS</p>
      <p className="bonscript">En cada detalle, marcamos la diferencia.</p>

      <div className="containCards">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img className='imagen3' src={image2} alt="" />
            <h3 className="textimgina monserat">Desarrollo con IA</h3>
            </div>
            <div className="card-back">
              <h3 className="monserat">Desarrollo con IA</h3>
              <p>
                Redefinimos la manera de diseñar y ofrecemos soluciones
                arquitectónicas avanzadas que no solo cumplen con las
                expectativas, sino que las superan.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img className='imagen3' src={image3} alt="" />
            <h3 className="textimgina monserat">Diseño internacional</h3>
            </div>
            <div className="card-back">
              <h3 className="monserat">Diseño internacional</h3>
              <p>
                Desde la elegancia europea hasta la modernidad asiática, nuestro
                equipo fusiona estilos internacionales para crear arquitectura
                única y en sintonía con las tendencias globales.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img className='imagen3' src={image4} alt="" />
            <h3 className="textimgina monserat">Inversión inteligente</h3>
            </div>
            <div className="card-back">
              <h3 className="monserat">Inversión inteligente</h3>
              <p>
                Nuestra experiencia, aliada a una visión estratégica, asegura
                que cada inversión se traduzca en un valor duradero. Aqui
                realizamos un proyecto para toda una vida
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img className='imagen3' src={image5} alt="" />
            <h3 className="textimgina monserat">Equipo multidisciplinar</h3>
            </div>
            <div className="card-back">
              <h3 className="monserat">Equipo multidisciplinar</h3>
              <p>
                Somos un equipo completo de expertos dedicados. Nuestra
                fortaleza radica en la colaboración sinérgica de diversos
                talentos, garantizando una solución integral y excepcional para
                cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page2;
