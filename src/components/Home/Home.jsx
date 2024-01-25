import React, { useEffect, useRef } from 'react';
import Nav from '../Nav';
import '../css/Home.css';
import '../../App.css';
import Page2 from './page2';
import Page3 from './page3';

const Home = () => {
  const contentRef = useRef(null);
  const headerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight && rect.bottom >= 0;

        if (isVisible) {
          contentRef.current.classList.add('visible');
          headerRefs.current.forEach((ref) => ref.classList.add('visible'));
        } else {
          contentRef.current.classList.remove('visible');
          headerRefs.current.forEach((ref) => ref.classList.remove('visible'));
        }
      }
    };

    // Agrega un listener al evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll a la parte superior y ejecuta la animación al cargar o refrescar la página
    window.scrollTo(0, 0);

    // Ejecuta la animación al cargar o refrescar la página
    if (contentRef.current) {
      contentRef.current.classList.add('visible');
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
        <button className='hablame'>HABLACON UN ASESOR</button>
        </div> 

        <div className='imacontent'>
        <div className='overlay circu'></div>
          <img className='imagen1' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
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
