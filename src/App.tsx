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
import News from './Pages/News';

// import { auth } from './db/firebase';

// import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import Galerie from './Pages/Galerie/Galerie';
// import { Link, useNavigate } from "react-router-dom";

import './App.css';

import {
  Route,
  Routes
} from "react-router-dom";

import PrivateRoutes from './Utils/PrivateRoutes';

const  App = () => {

  // const [user, setUser] = useState(undefined)


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          {/* <Route path="/actualite" element={<Actualite />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/galerie/*" element={<Galerie />} />
          <Route element={ <PrivateRoutes />} >
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/news/*"  element={ <News /> } />
           <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
