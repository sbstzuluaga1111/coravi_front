import React from "react";
import "../../App.css";

const page2 = () => {
  return (
    <div className="App-header nosotros">
      <h1>NUESTROS DISTINTIVOS</h1>
      <h2>En cada detalle, marcamos la diferencia.</h2>

      <div className="containCards">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
            <img className='imagen3' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
            </div>
            <div class="card-back">
              <h3>Desarrollo con IA</h3>
              <p>
                Redefinimos la manera de diseñar y ofrecemos soluciones
                arquitectónicas avanzadas que no solo cumplen con las
                expectativas, sino que las superan.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front">
            <img className='imagen3' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
            </div>
            <div class="card-back">
              <h3>Diseño internacional</h3>
              <p>
                Desde la elegancia europea hasta la modernidad asiática, nuestro
                equipo fusiona estilos internacionales para crear arquitectura
                única y en sintonía con las tendencias globales.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front">
            <img className='imagen3' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
            </div>
            <div class="card-back">
              <h3>Inversión inteligente </h3>
              <p>
                Nuestra experiencia, aliada a una visión estratégica, asegura
                que cada inversión se traduzca en un valor duradero. Aqui
                realizamos un proyecto para toda una vida
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front">
            <img className='imagen3' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
            </div>
            <div class="card-back">
              <h3>Equipo multidisciplinar</h3>
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
