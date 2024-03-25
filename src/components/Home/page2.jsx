import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../css/Home2.css';
import imagen2 from '../../img/PAGINA WEB/home2.jpg';
import imagen3 from '../../img/PAGINA WEB/home3.jpg';
import imagen4 from '../../img/PAGINA WEB/home4.jpg';
import imagen5 from '../../img/PAGINA WEB/home5.jpg';

const Page2 = () => {
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
<p className='bonscript'>NUESTROS SERVICIOS</p>
<p className='monserat titulos' >TODO LO QUE NECESITAS, LO ENCUENTRAS AQUÍ.</p>
</div> 

<div className='containerimgs'>

<div className='imacontent'>
  <img className='imagen2' src={imagen2} alt="" />
  <NavLink to="/diseño-proyecto" className='contentimage1'>
  <button className='bututu'>DISEÑO DE PROYECTOS</button>
  </NavLink>
</div>



<div className='imacontent'>
  <img className='imagen2' src={imagen4} alt="" />
  <NavLink to="/diseño-interiores" className='contentimage1'>
  <button className='bututu'>DISEÑO DE INTERIORES</button>
  </NavLink>
</div>

<div className='imacontent'>
  <img className='imagen2' src={imagen3} alt="" />
  <NavLink to="/diseño-mobiliario" className='contentimage1'>
  <button className='bututu'>DISEÑO DE MOBILIARIO</button>
  </NavLink>
</div>

<div className='imacontent'>
  <img className='imagen2' src={imagen5} alt="" />
  <NavLink to="/modelado-render" className='contentimage1'>
  <button className='bututu'>MODELADO Y RENDER</button>
  </NavLink>
</div>


</div>

</div>
  );
}

export default Page2;
