import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Register  from './screens/Register';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
