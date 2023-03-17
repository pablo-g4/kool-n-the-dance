import addNews from "../Components/form/addNews";
import { Route, Routes, Outlet, useNavigate, Navigate } from "react-router-dom";
import AddNews from '../Components/form/addNews';
import Actualite from "./News/News";

const News = () => {

  return (
    <Routes>
        <Route path="/" element={ <Actualite />} />
        <Route path="/add-news"  element={ <AddNews /> } />
    </Routes>
  )
}

export default News