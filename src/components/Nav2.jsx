import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';

const Nav2 = () => {
  const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
  const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar la visibilidad del menú
  const [showServicios, setShowServicios] = useState(false); // Estado para controlar la visibilidad del menú de servicios
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSugerenciasClick = () => {
    setShowSugerenciasModal(true);
    setShowMenu(false);
  };

  const handleSugerenciasClick1 = () => {
    setShowSugerenciasModal1(true);
    setShowMenu(false);
  };

  const handleServiciosClick = () => {
    setShowServicios(!showServicios); // Cambiar el estado de visibilidad de los servicios
    if (!showServicios && !showMenu) {
      setShowMenu(true); // Si los servicios están cerrados y el menú principal también, abre el menú principal
    }
  };
  

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Cambiar el estado de visibilidad del menú principal
  };
  

  return (
    <div>
      <button className="navbar-toggler d-md-none" onClick={toggleMenu}>
        <span className={`navbar-toggler-icon ${showMenu ? 'show' : ''}`}></span>
      </button>
      <div className={`Nav2 ${showMenu ? 'show' : ''}`} ref={menuRef}>
        <div className={`navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setShowMenu(false)}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link" onClick={() => setShowMenu(false)}>Nosotros</NavLink>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link dropdown-toggle" onClick={handleServiciosClick}>Servicios</a>
                <ul className={`dropdown-menu ${showServicios ? 'show' : ''}`}>
                <li><NavLink to="/diseño-proyecto" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Proyecto</NavLink></li>
                <li><NavLink to="/diseño-interiores" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Interiores</NavLink></li>
                <li><NavLink to="/diseño-mobiliario" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Mobiliario</NavLink></li>
                <li><NavLink to="/modelado-render" className="nav-link" onClick={() => setShowMenu(false)}>Modelado y Render</NavLink></li>
                <li><NavLink to="/digitacion" className="nav-link" onClick={() => setShowMenu(false)}>Digitación</NavLink></li>
                <li><NavLink to="/construccion" className="nav-link" onClick={() => setShowMenu(false)}>Construcción</NavLink></li>
                <li><NavLink to="/inmobiliaria" className="nav-link" onClick={() => setShowMenu(false)}>Inmobiliaria</NavLink></li>
                <li><NavLink to="/asesoria" className="nav-link" onClick={() => setShowMenu(false)}>Asesoría</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="nav-link d-md-none" onClick={handleSugerenciasClick1}>Agenda tu cita</button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-md-none" onClick={handleSugerenciasClick}>Comentarios</button>
            </li>
            <li className="nav-item">
  <span className="nav-link version">V 1.0</span>
</li>

          </ul>
        </div>
      </div>
      {showSugerenciasModal && <SugerenciasModal onClose={() => setShowSugerenciasModal(false)} />}
      {showSugerenciasModal1 && <Cita onClose={() => setShowSugerenciasModal1(false)} />}
    </div>
  );
}

export default Nav2;
