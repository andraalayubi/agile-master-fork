// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detailperusahaan from './pages/Detail_perusahaan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detailperusahaan />} />
      </Routes>
    </Router>
  )
}

export default App;
