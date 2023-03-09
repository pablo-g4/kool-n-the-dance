import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import '../src/Components/Footer/Footer.css'
import '../src/Pages/Actualite/Actualite.css'
import './Components/CardRight/CardRight.css'
import './Components/Footer/Footer.css'
import './Components/Navbar/Navbar.css'
import App from './App';
import '../src/Pages/Galerie/Galerie.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


