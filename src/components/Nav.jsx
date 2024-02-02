import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Nav.css';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';
import watsap from '../img/whatsapp.png'
import logo from '../img/PAGINA WEB/logocoraving.png';
import Nav2 from './Nav2';

const Nav = () => {
  const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
  const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);
  const [serviciosHover, setServiciosHover] = useState(false);
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573143220765&text=Hola. Quiero comunicarme con ustedes.', '_blank');
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
          
          <NavLink to="/" className="navbar-brand btn btn-link nav-link-with-underline">
                <button className="navbar-brand btn btn-link logotipot"><img className='logo' src={logo} alt=''></img>
                Arquitectura & soluciones</button>
              </NavLink>
          
          
          
          <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <Nav2></Nav2>


          {/* Tres botones visibles solo en dispositivos más grandes */}
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
          <div>DISEÑO DE PROYECTO</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/diseño-interiores" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>DISEÑO DE INTERIORES</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/diseño-mobiliario" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>DISEÑO DE MOBILIARIO</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/modelado-render" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>MODELADO Y RENDER</div>
        </NavLink>
      </li>
      </div>
      <div className='hizz'>
      <li>
        <NavLink to="/digitacion" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>DIGITACIÓN</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/construccion" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>CONSTRUCCIÓN</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/inmobiliaria" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>INMOBILIARIA</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/asesoria" className="navbar-brand btn btn-link nav-link-with-underline1 colado">
          <div>ASESORÍA</div>
        </NavLink>
      </li></div>
    </ul>
  </div>
)}

    </div>


            <NavLink to="/nosotros" className="navbar-brand btn btn-link nav-link-with-underline">Nosotros</NavLink>
            <button className="navbar-brand btn btn-link nav-link-with-underline "  onClick={handleSugerenciasClick1}>Agenda tu cita</button>
            <button className="navbar-brand btn btn-link nav-link-with-underline" onClick={handleSugerenciasClick}>?</button>
          </div>

      
      {showSugerenciasModal && <SugerenciasModal onClose={() => setShowSugerenciasModal(false)} />}
      {showSugerenciasModal1 && <Cita onClose={() => setShowSugerenciasModal1(false)} />}
    </div>
      </nav>
<div className='watsapp'>
<div onClick={handleWhatsAppClick} className='watsappbutton'>
<img className='watsappima' src={watsap} alt="" />
</div>
</div>

    </div>
  );
}

export default Nav;
