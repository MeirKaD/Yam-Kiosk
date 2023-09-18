import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import Kiosk from './components/Kiosk'; 
import './index.css';

import { Routes, Route,BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/welcome/:username" element={<Kiosk />} />
    </Routes>
  </BrowserRouter> 
);