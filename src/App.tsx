import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import People from './pages/People';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './pages/Test';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/people' element={<People />} />
        <Route path='/search' element={<Search />} />
        <Route path='/test' element={<Test />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/joinus' element={<JoinUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
