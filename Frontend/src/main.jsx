import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Calculator from './components/bmi/CalculatorForm';
import Navbar from './components/ui/Navbar';
import App from './App';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index  element={<App />} />
      <Route path="calculate"  element={<Calculator />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
