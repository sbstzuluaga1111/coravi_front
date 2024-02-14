import React from 'react';
import '../../App.css';
import '../css/Nosotros.css';
import Nav from '../Nav';
import Page2Nosotros from './page2';
import Page3 from './page3';
import image1 from '../../img/PAGINA WEB/nosotros1.jpg'

const Nosotros = () => {
  return (
    <div><Nav></Nav>
    <div className='nosotros'>
        <div className='imagenNosotrosContainer'>
          <div className='imagenNosotros'>
          <img className='imagen3' src={image1} alt="" />
          </div>
          <div className='overlay'></div>
          <div className='textoSuperpuesto'>
            <p className='monserat titulos'>Un mundo arquitectonico reservado para aquellos que buscan la excelencia</p>
          </div>
        </div>
     
      <Page2Nosotros></Page2Nosotros>
      <Page3></Page3>
      
    </div></div>
  );
}

export default Nosotros;
