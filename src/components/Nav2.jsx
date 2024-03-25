import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';

const Nav2 = () => {
  const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
  const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Agregar el manejador de eventos para cerrar el menú al hacer clic fuera de él
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Agregar el manejador de eventos al documento
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSugerenciasClick = () => {
    setShowSugerenciasModal(true);
    setShowMenu(false); // Ocultar el menú cuando se abre SugerenciasModal
  };

  const handleSugerenciasClick1 = () => {
    setShowSugerenciasModal1(true);
    setShowMenu(false); // Ocultar el menú cuando se abre Cita
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowSugerenciasModal(false); // Ocultar SugerenciasModal cuando se abre/cierra el menú
    setShowSugerenciasModal1(false); // Ocultar Cita cuando se abre/cierra el menú
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
              <NavLink to="/diseño-proyecto" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Proyecto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/diseño-interiores" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Interiores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/diseño-mobiliario" className="nav-link" onClick={() => setShowMenu(false)}>Diseño de Mobiliario</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/modelado-render" className="nav-link" onClick={() => setShowMenu(false)}>Modelado y Render</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/digitacion" className="nav-link" onClick={() => setShowMenu(false)}>Digitación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/construccion" className="nav-link" onClick={() => setShowMenu(false)}>Construcción</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/inmobiliaria" className="nav-link" onClick={() => setShowMenu(false)}>Inmobiliaria</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/asesoria" className="nav-link" onClick={() => setShowMenu(false)}>Asesoría</NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link d-md-none" onClick={handleSugerenciasClick1}>Agenda tu cita</button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-md-none" onClick={handleSugerenciasClick}>Comentarios</button>
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
