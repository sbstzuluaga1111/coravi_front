import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import '../css/Home1.css';
import '../../App.css';
import imagen1 from '../../img/PAGINA WEB/home1.png';


const Page1 = () => {
  const contentRef = useRef(null);
  const headerRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
          headerRefs.current.forEach((ref) => ref.classList.add('visible'));
        } else {
          contentRef.current.classList.remove('visible');
          headerRefs.current.forEach((ref) => ref.classList.remove('visible'));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentContentRef = contentRef.current; // Copia a una variable local

    if (currentContentRef) {
      observer.observe(currentContentRef);
    }

    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
    };
  }, []);


  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573215513300', '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentContentRef = contentRef.current; // Copia a una variable local

    if (currentContentRef) {
      currentContentRef.classList.add('visible');
      headerRefs.current.forEach((ref) => ref.classList.add('visible'));
    }
  }, []);

 

  return (
    <div>
      
      <div className=''>
        <div ref={contentRef} className={`content`}>


        <div className='textoyu'> 
        <p className='bonscript'>DAR EL PRIMER PASO ES GRATIS</p>
        <p className='texttt monserat titulos'>Exclusividad Hecha Espacio, Diseñado Para Ti.</p>
        <button onClick={handleWhatsAppClick} className='hablame bonscript talet'>HABLACON UN ASESOR</button>
        </div> 

        <div className='imacontent'>
        <div className='overlay circu'></div>
          <img className='imagen1' src={imagen1} alt="" />
          <div className='contentimage'>
          <div>
          <p className='monserat subss'>Nuestra inspiracion en el mundo</p>
          <p className='bonscript tel'>Explora nuestra lista de referentes internacionles</p>
          </div>
          <NavLink to="/explora-el-mundo">
          <button className='bonscript tuto'>EXPLORA EL MUNDO</button>
          </NavLink>
          
          </div>
        </div>

      </div>
       
      </div>
      
    </div>
  );
}

export default Page1;
