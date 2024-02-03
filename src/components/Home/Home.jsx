import React, { useEffect, useRef } from 'react';
import Nav from '../Nav';
import '../css/Home.css';
import '../../App.css';
import Page2 from './page2';
import Page3 from './page3';
import imagen1 from '../../img/PAGINA WEB/home1.jpg';



const Home = () => {
  const contentRef = useRef(null);
  const headerRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Ajusta este valor según tus necesidades
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
      <Nav />
      <div className='App-header'>
        <div ref={contentRef} className={`content`}>


        <div className='textoyu'> 
        <p>DAR EL PRIMER PASO ES GRATIS</p>
        <h1 className='texttt'>EXCLUSIVIDAD HECHA ESPACIO, DISEÑADO PARA TI.</h1>
        <button onClick={handleWhatsAppClick} className='hablame'>HABLACON UN ASESOR</button>
        </div> 

        <div className='imacontent'>
        <div className='overlay circu'></div>
          <img className='imagen1' src={imagen1} alt="" />
          <div className='contentimage'>
          <div>
          <h2>Nuestra inspiracion en el mundo</h2>
          <br />
          <p>Esplora nuestra lista de referentes internacionles</p>
          </div>
          <div>
          <button>EXPLORA EL MUNDO</button>
          </div>
          </div>
        </div>

      </div>
        <Page2></Page2>
        <Page3></Page3>
      </div>
      
    </div>
  );
}

export default Home;
