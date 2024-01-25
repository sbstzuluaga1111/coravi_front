import React from 'react';
import '../../App.css';
import '../css/Nosotros.css';
import Nav from '../Nav';
import Page2Nosotros from './page2';
import Page3 from './page3';

const Nosotros = () => {
  return (
    <div><Nav></Nav>
    <div className='nosotros'>
        <div className='imagenNosotrosContainer'>
          <div className='imagenNosotros'>
          <img className='imagen3' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
          </div>
          <div className='overlay'></div>
          <div className='textoSuperpuesto'>
            <h2>Un mundo arquitectonico reservado para aquellos que buscan la excelencia</h2>
          </div>
        </div>
     
      <Page2Nosotros></Page2Nosotros>
      <Page3></Page3>
      
    </div></div>
  );
}

export default Nosotros;
