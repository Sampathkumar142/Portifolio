import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div>
      <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/portifolio' element={<Home />}/>
          <Route path='/portifolio' element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;


