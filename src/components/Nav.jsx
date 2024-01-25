import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Nav.css';
import SugerenciasModal from './Sugerencias/Sugerencias';
import Cita from './Agenda/Cita';
import watsap from '../img/whatsapp.png'

const Nav = () => {
  const [showSugerenciasModal, setShowSugerenciasModal] = useState(false);
  const [showSugerenciasModal1, setShowSugerenciasModal1] = useState(false);
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);
  const [serviciosHover, setServiciosHover] = useState(false);

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
          
          <NavLink to="/" class="navbar-brand btn btn-link nav-link-with-underline">
                <button className="navbar-brand btn btn-link">Coravi</button>
              </NavLink>
          
          
          {/* Botón de despliegue solo visible en dispositivos móviles */}
          <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del offcanvas */}
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {/* Lista de navegación */}
              <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Inicio</NavLink>
                </li>

            <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </div>
            <ul class="dropdown-menu dropdown-menu-dark">
              <NavLink to="/diseño-proyecto" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE PROYECTO</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/diseño-interiores" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE INTERIORES</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/diseño-mobiliario" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - DISEÑO DE MOBILIARIO</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/modelado-render" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - MODELADO Y RENDER</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/digitacion" class="navbar-brand btn btn-link nav-link-with-underline" >
                <div className='servi'> - DIGITACIÓN</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/construccion" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - CONSTRUCCIÓN</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/inmobiliaria" class="navbar-brand btn btn-link nav-link-with-underline">
                <div className='servi'> - INMOVILIARIA</div>
              </NavLink>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <NavLink to="/asesoria" class="navbar-brand btn btn-link nav-link-with-underline" >
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
          </div>

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
<button className='watsappbutton'>
<img className='watsappima' src={watsap} alt="" />
</button>
</div>

    </div>
  );
}

export default Nav;
