import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import Layout from "./Pages/Layouts/Layout";
import Galerie from "./Pages/Galerie/Galerie";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import General from "./Pages/Admin/General/General";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/galerie/*" element={<Galerie />} />
          <Route path="/tt" element={<General />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
