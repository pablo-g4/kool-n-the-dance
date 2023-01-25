import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Layout from './Pages/Layouts/Layout';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Route,
  Routes
} from "react-router-dom";


const  App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
