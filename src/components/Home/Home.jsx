import React, { useEffect, useRef } from 'react';
import Nav from '../Nav';
import '../css/Home.css';
import '../../App.css';
import Page2 from './page2';
import Page3 from './page3';

const Home = () => {
    const contentRef = useRef(null);
    const headerRefs = useRef([]);

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

    useEffect(() => {
        contentRef.current.classList.add('visible');
        headerRefs.current.forEach((ref) => ref.classList.add('visible'));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Nav />
            <div className='App-header'>
                <div ref={contentRef} className={`content`}>


        <div className='textoyu'> 
        <p>DAR EL PRIMER PASO ES GRATIS</p>
        <h1 className='texttt'>Exclusividad Hecha <br></br> Espacio,
         Diseñado
         <br></br> para Ti.</h1>
        <button className='hablame'>HABLACON UN ASESOR</button>
        </div> 

        <div className='imacontent'>
          <img className='imagen1' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
          <div className='contentimage'>
          <h2>Nuestra inspiracion en el mundo</h2>
          <p>Esplora nuestra lista de referentes internacionles</p>
          <button>EXPLORA EL MUNDO</button>
          </div>
        </div>

      </div>

      </div>
      
      <div className='App-header'>
      <Page2></Page2>
      </div>

      <div className='App-header'>
      <Page3></Page3>
      </div>
    </div>
  );
}

export default Home;
