import React from 'react';
import Home from './Home';
import Claims from './Claims';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
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

