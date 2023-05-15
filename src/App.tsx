import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Topics from './Pages/Topics'
import Layout from './Pages/Layouts/Layout'
import Galerie from './Pages/Galerie/Galerie'
import PlanningPage from './Pages/Planning/Planning'

import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ResetPassword from './Pages/ResetPassword'

import { CoursPage } from './Pages/Cours/CoursPage'
import './App.css'

import General from "./Pages/Admin/General/General"

import NewsPage from './Pages/News/News'
import AdminNews from './Pages/Admin/News/news'
import AdminLayout from './Pages/Layouts/AdminLayout'
import AdminGalleryPage from './Pages/Admin/Gallery/Gallery'
import AdminForfaitPage from './Pages/Admin/Forfait/Forfaits'
import AdminPlanningPage from "./Pages/Admin/Planning/Planning"
import AdminCoursPage from './Pages/Admin/Cours/AdminCoursPage'

const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/planning/*" element={<PlanningPage />} />
            <Route path="/actualite" element={<NewsPage />} />
            <Route path="/cours" element={<CoursPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/galerie/*" element={<Galerie />} />
          </Route>
          <Route element={<AdminLayout />} >
              <Route path="/admin/" element={<General />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />
              <Route path="/admin/News" element={<AdminNews />} />
              <Route path="/admin/planning" element={<AdminPlanningPage />} />
              <Route path="/admin/cours/*" element={<AdminCoursPage />} />
              <Route path="/admin/galerie" element={<AdminGalleryPage />} />
              <Route path="/admin/forfait" element={<AdminForfaitPage />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
