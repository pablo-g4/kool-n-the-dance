import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Layout from './Pages/Layouts/Layout';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';

import Posts from './Pages/Posts/posts';

import { auth } from './db/firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import Galerie from './Pages/Galerie/Galerie';

import './App.css';

import {
  Route,
  Routes
} from "react-router-dom";

import Gestionactualite from './Pages/Gestionactualite/Gestionactualite';





const  App = () => {

  const [user, setUser] = useState(undefined)



  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/galerie/*" element={<Galerie />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/gestionactualite/*" element={<Gestionactualite/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
