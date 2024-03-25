import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Diseñoproyecto from './components/Servicios/Diseño-proyecto';
import Diseñointerior from './components/Servicios/Diseño-interiores';
import Diseñomobiliario from './components/Servicios/Diseno-mobiliario';
import Modeladorender from './components/Servicios/Modelado-render';
import Digitacion from './components/Servicios/Digitacion';
import Construccion from './components/Servicios/Construccion';
import Inmobiliaria from './components/Servicios/Inmobiliaria';
import Asesoria from './components/Servicios/Asesoria';
import Explora from './components/Explora/Page1';
import NotFound from './components/Errors/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/explora-el-mundo" element={<Explora />} />
        <Route path="/diseño-proyecto" element={<Diseñoproyecto />} />
        <Route path="/diseño-interiores" element={<Diseñointerior />} />
        <Route path="/diseño-mobiliario" element={<Diseñomobiliario />} />
        <Route path="/modelado-render" element={<Modeladorender />} />
        <Route path="/digitacion" element={<Digitacion />} />
        <Route path="/construccion" element={<Construccion />} />
        <Route path="/inmobiliaria" element={<Inmobiliaria />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
