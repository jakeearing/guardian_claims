import './style/app.css';
import React from 'react';
import Home from './components/Home';
import Claims from './components/Claims';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/claim" element={<Claims />} />
          <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
