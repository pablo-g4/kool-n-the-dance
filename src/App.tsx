
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
import Planning from "./Pages/Admin/Planning/Planning";
import Cours from './Pages/Cours/Cours';
import './App.css';

import General from "./Pages/Admin/General/General";
import { Route, Routes } from "react-router-dom";


import PrivateRoutes from './Utils/PrivateRoutes';
import NewsPage from './Pages/News/News';
import AdminNews from './Pages/Admin/News';

const App = () => {

  // const [user, setUser] = useState(undefined)
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/actualite" element={<NewsPage />} />
          <Route path="/cours" element={<Cours />} />

          {/* <Route path="/actualite" element={<Actualite />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/galerie/*" element={<Galerie />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin" element={<General />} />
            <Route path="/admin/News" element={<AdminNews />} />
            <Route path="/admin/planning" element={<Planning />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
