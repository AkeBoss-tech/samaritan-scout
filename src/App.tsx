import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </main>
  );
};

export default App;
