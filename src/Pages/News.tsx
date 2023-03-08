import addNews from "../Components/form/addNews";

import React from 'react';
import { Route, Routes, Outlet, useNavigate, Navigate } from "react-router-dom";
import AddNews from '../Components/form/addNews';

const News = () => {
  return (
    <Routes>
        <Route path="/add-news"  element={ <AddNews /> } />
    </Routes>
  )
}

export default News