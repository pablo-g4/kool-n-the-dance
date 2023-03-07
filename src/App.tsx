import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Layout from './Pages/Layouts/Layout';
import Login from './Pages/Login';

import { auth } from './db/firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import Galerie from './Pages/Galerie/Galerie';
import './App.css';

import {
  Route,
  Routes
} from "react-router-dom";






const  App = () => {

  const [user, setUser] = useState(undefined)



  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/galerie/*" element={<Galerie />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
