import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Topics from './Pages/Topics'
import Layout from './Pages/Layouts/Layout'
import Galerie from './Pages/Galerie/Galerie'
import PlanningPage from './Pages/Planning/Planning'

import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ResetPassword from './Pages/ResetPassword'

import Cours from './Pages/Cours/Cours'
import './App.css'

import General from "./Pages/Admin/General/General"

import NewsPage from './Pages/News/News'
import AdminNews from './Pages/Admin/News/news'
import AdminLayout from './Pages/Layouts/AdminLayout'
import AdminGallery from './Pages/Admin/Gallery/Gallery'
import AdminForfait from './Pages/Admin/Forfait/Forfaits'
import AdminPlanning from "./Pages/Admin/Planning/Planning"

const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/planning/*" element={<PlanningPage />} />
            <Route path="/actualite" element={<NewsPage />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/galerie/*" element={<Galerie />} />
          </Route>
          <Route element={<AdminLayout />} >
              <Route path="/admin/" element={<General />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />
              <Route path="/admin/News" element={<AdminNews />} />
              <Route path="/admin/planning" element={<AdminPlanning />} />
              <Route path="/admin/galerie" element={<AdminGallery />} />
              <Route path="/admin/forfait" element={<AdminForfait />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
