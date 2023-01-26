import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
<<<<<<< HEAD
import '../src/Components/Footer/Footer.css'
import '../src/Pages/Actualite/Actualite.css'
=======
import './Components/Footer/Footer.css'
>>>>>>> main
import App from './App';

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


