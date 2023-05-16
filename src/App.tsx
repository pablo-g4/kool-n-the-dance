import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layouts/Layout'
import { GaleriePage } from './Pages/Galerie/GaleriePage'
import { PlanningPage } from './Pages/Planning/PlanningPage'

import { LoginPage } from './Pages/Login/LoginPage'
import { ResetPasswordPage as AdminResetPasswordPage } from './Pages/Admin/ResetPassword/ResetPasswordPage'
import { NewsPage } from './Pages/News/NewsPage'
import { CoursPage } from './Pages/Cours/CoursPage'
import './App.css'

import { GeneralPage } from "./Pages/Admin/General/GeneralPage"

import { NewsPage as AdminNewsPage } from './Pages/Admin/News/NewsPage'
import AdminLayout from './Pages/Layouts/AdminLayout'
import { GalleryPage as AdminGalleryPage} from './Pages/Admin/Gallery/GalleryPage'
import { ForfaitPage as AdminForfaitPage} from './Pages/Admin/Forfait/ForfaitPage'
import { PlanningPage as AdminPlanningPage} from "./Pages/Admin/Planning/PlanningPage"
import { CoursPage as AdminCoursPage } from './Pages/Admin/Cours/CoursPage'

const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/planning/*" element={<PlanningPage />} />
            <Route path="/news/*" element={<NewsPage />} />
            <Route path="/cours/*" element={<CoursPage />} />
            <Route path="/login/*" element={<LoginPage />} />
            <Route path="/galerie/*" element={<GaleriePage />} />
          </Route>
          <Route element={<AdminLayout />} >
              <Route path="/admin/" element={<GeneralPage />} />
              <Route path="/admin/reset-password" element={<AdminResetPasswordPage />} />
              <Route path="/admin/news" element={<AdminNewsPage />} />
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
