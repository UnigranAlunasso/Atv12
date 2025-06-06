import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Login';
import App from './App';
import CriarLogin from './assets/pages/CriarLogin';
import RotaPrivada from './assets/componentes/RotaPrivada'; // <== importar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar" element={<CriarLogin />} />
        <Route
          path="/home"
          element={
            <RotaPrivada>
              <App />
            </RotaPrivada>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
