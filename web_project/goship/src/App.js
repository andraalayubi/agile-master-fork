// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    // <div className="App">
    //   <h1>{message}</h1>
    // </div>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
