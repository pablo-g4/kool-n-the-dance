import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Layout from './Pages/Layouts/Layout';
// import Actualite from './Pages/Actualite/Actualite';
import Galerie from './Pages/Galerie/Galerie';
// import News from './Pages/form/news';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import AddNews from './Components/form/addNews';

import { auth } from './db/firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// import Galerie from './Pages/Galerie/Galerie';

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
          {/* <Route path="/actualite" element={<Actualite />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/galerie/*" element={<Galerie />} />
          <Route path="/news/*" element={ <AddNews /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
