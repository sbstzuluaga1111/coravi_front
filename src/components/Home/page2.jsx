import React, { useEffect, useRef } from 'react';
import '../../App.css';

const Servicios = () => {
  const serviciosRef = useRef(null);

  const handleScroll = () => {
    const element = serviciosRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.bottom >= windowHeight * 0.25 && rect.top <= windowHeight * 0.75) {
      element.classList.remove('fade-out');
      element.querySelector('.textoyuu').classList.add('fade-out-active');
    } else {
      element.classList.add('fade-out');
      element.querySelector('.textoyuu').classList.remove('fade-out-active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div ref={serviciosRef} className='contentt fade-out'>
<div className='textoyuu'> 
<p className='texttt'>DAR EL PRIMER PASO ES GRATIS</p>
<h1 >TODO LO QUE NECESITAS, LO ENCUENTRAS AQUÍ.</h1>
</div> 

<div className='containerimgs'>

<div className='imacontent'>
  <img className='imagen2' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
  <div className='contentimage1'>
  <button className='bututu'>DISEÑO DE PROYECTOS</button>
  </div>
</div>

<div className='imacontent'>
  <img className='imagen2' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
  <div className='contentimage1'>
  <button className='bututu'>DISEÑO DE MOBILIARIO</button>
  </div>
</div>

<div className='imacontent'>
  <img className='imagen2' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
  <div className='contentimage1'>
  <button className='bututu'>DISEÑO DE INTERIORES</button>
  </div>
</div>

<div className='imacontent'>
  <img className='imagen2' src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png" alt="" />
  <div className='contentimage1'>
  <button className='bututu'>MODELADO Y RENDER</button>
  </div>
</div>


</div>

</div>
  );
}

export default Servicios;
