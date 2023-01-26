<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../src/Components/Footer/Footer.css";
import "../src/Pages/Actualite/Actualite.css";
import "./Components/Footer/Footer.css";
import App from "./App";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import './Components/Footer/Footer.css'
import './Components/Navbar/Navbar.css'
import App from './App';
>>>>>>> 6108e628d658b00464071da112654a123f9a8ee9

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
