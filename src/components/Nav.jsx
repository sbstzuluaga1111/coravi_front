import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';
import watsap from '../img/whatsapp.png';
import logo from '../img/favicon.png';
import Nav2 from './Nav2';

const Nav = () => {
  const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
  const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);
  const [serviciosHover, setServiciosHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detectar si es un dispositivo móvil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573215513300&text=Hola. Quiero comunicarme con ustedes.', '_blank');
  };

  const handleSugerenciasClick = () => {
    setShowSugerenciasModal(true);
  };

  const handleSugerenciasClick1 = () => {
    setShowSugerenciasModal1(true);
  };

  const toggleRecuadro = () => {
    setMostrarRecuadro(!mostrarRecuadro);
    setServiciosHover(!serviciosHover);
  };

  return (
    <div className='Nav'>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">

          <NavLink to="/" className="navbar-brand btn btn-link nav-link-with-underline ok">
            <button className="navbar-brand btn btn-link logotipot">
              <div className="logo-container">
                <img className='logo' src={logo} alt=''></img>
                <div>CORAVI</div> 
              </div>
              <div>
                <p className='textitt'>Arquitectura & soluciones</p>
              </div>
            </button>
          </NavLink>

          {isMobile && <Nav2 />}

          <div className="d-none d-md-flex">
            
            <div>
              <div className={`navbar-brand btn btn-link nav-link-with-underline ${mostrarRecuadro ? 'active' : ''}`} onClick={toggleRecuadro}>
                Servicios
              </div>
              {mostrarRecuadro && (
                <div className="recuadro-debajo">
                  <ul className='acomodo'>
                    <div className='hiz'>
                      <li>
                        <NavLink to="/diseño-proyecto" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>DISEÑO DE PROYECTO</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/diseño-interiores" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>DISEÑO DE INTERIORES</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/diseño-mobiliario" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>DISEÑO DE MOBILIARIO</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/modelado-render" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>MODELADO Y RENDER</div>
                        </NavLink>
                      </li>
                    </div>
                    <div className='hizz'>
                      <li>
                        <NavLink to="/digitacion" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>DIGITACIÓN</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/construccion" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>CONSTRUCCIÓN</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/inmobiliaria" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>INMOBILIARIA</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/asesoria" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
                          <div className='colado'>ASESORÍA</div>
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
              )}
            </div>
            <NavLink to="/nosotros" className="navbar-brand btn btn-link nav-link-with-underline">Nosotros</NavLink>
            <button className="navbar-brand btn btn-link nav-link-with-underline" onClick={handleSugerenciasClick1}>Agenda tu cita</button>
            <button className="navbar-brand btn btn-link nav-link-with-underline" onClick={handleSugerenciasClick}>?</button>
          </div>

        </div>
      </nav>
      <div className='watsapp'>
        <div onClick={handleWhatsAppClick} className='watsappbutton'>
          <img className='watsappima' src={watsap} alt="" />
        </div>
      </div>
      {showSugerenciasModal && <SugerenciasModal onClose={() => setShowSugerenciasModal(false)} />}
      {showSugerenciasModal1 && <Cita onClose={() => setShowSugerenciasModal1(false)} />}
    </div>
  );
}

export default Nav;

