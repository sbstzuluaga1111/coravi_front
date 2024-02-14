import React from 'react';
import Nav from '../Nav';
import Page2 from './page2';
import image1 from '../../img/PAGINA WEB/Explora.jpg'

const Page1 = () => {
  return (
    <div><Nav></Nav>
    <div className=''>
        <div className='imagenNosotrosContainer'>
          <div className='imagenNosotros'>
          <img className='imagen3' src={image1} alt="" />
          </div>
          <div className='overlay'></div>
          <div className='textoSuperpuesto'>
            <p className='monserat titulos'>El mundo es nuestro libro de ideas</p>
            <p className='bonscript'>Explora todo nuestro grupo de referentes 
en ARCHDAILY</p>
          </div>
        </div>
     
      
      <Page2></Page2>
      
    </div></div>
  );
}

export default Page1;
