import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';
import './css/Nav.css';


const Nav2 = () => {

    const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
    const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);

    const handleSugerenciasClick = () => {
      setShowSugerenciasModal(true);
    };
  
    const handleSugerenciasClick1 = () => {
      setShowSugerenciasModal1(true);
    };
  
  

  return (
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Inicio</NavLink>
                </li>

            <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <NavLink to="/diseño-proyecto" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE PROYECTO</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/diseño-interiores" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE INTERIORES</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/diseño-mobiliario" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE MOBILIARIO</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/modelado-render" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - MODELADO Y RENDER</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/digitacion" className="navbar-brand btn btn-link nav-link-with-underline" >
                <div className='servi'> - DIGITACIÓN</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/construccion" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - CONSTRUCCIÓN</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/inmobiliaria" className="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - INMOVILIARIA</div>
              </NavLink>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <NavLink to="/asesoria" className="navbar-brand btn btn-link nav-link-with-underline" >
                <div className='servi'> - ASESORIA</div>
              </NavLink>
            </ul>
          </li>


                <li className="nav-item">
                  <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={handleSugerenciasClick1}>Agenda tu cita</button>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={handleSugerenciasClick}>Comentarios</button>
                </li>
              </ul>
            </div>



            {showSugerenciasModal && <SugerenciasModal onClose={() => setShowSugerenciasModal(false)} />}
      {showSugerenciasModal1 && <Cita onClose={() => setShowSugerenciasModal1(false)} />}

          </div>
  );
}

export default Nav2;
