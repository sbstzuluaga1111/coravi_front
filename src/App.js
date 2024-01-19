import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import NotFound from './components/Errors/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        


        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;