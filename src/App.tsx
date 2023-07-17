import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/samaritan-scout/" element={<Home />} />
        <Route path="/samaritan-scout/about" element={<About />} />
        <Route path="/samaritan-scout/*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
