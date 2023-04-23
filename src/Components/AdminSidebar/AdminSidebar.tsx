import React, { useState } from "react"
import "./AdminSidebar.css"
import LogoBlanc from "../../images/LogoBlanc.png"
import { Link } from "react-router-dom";

const AdminSidebar = ({ page = "" }) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    //Ajouter le className 'currentPage' à l'onglet correspondant à la page active
    //
    //Essayer de faire les flêches sur l'onglet actif
    //
    //D'après la maquettes enlevé Navbar (top) et footer
    <div className="aSidebar">
      <div className="aSidebar_logo">
        <img className="LogoBlanc" src={LogoBlanc}></img>
      </div>
      <Link
        className={
          page == "/admin" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        }
        to="/admin"
      >
        <p className="aSidebar_text">Gestion Général</p>
      </Link>
      <Link className="aSidebar_onglet" to="/admin/cours">
        <p className="aSidebar_text">Gestion Cours</p>
      </Link>
      <Link
        className={
          page == "/admin/planning" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        }
        to="/admin/planning"
      >
        <p className="aSidebar_text">Gestion Planning</p>
      </Link>
      <Link className={
        page === "/admin/galerie" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
      } to="/admin/galerie">
        <p className="aSidebar_text">Gestion Galerie</p>
      </Link>
      <Link 
        className={ page === "/admin/news" ? "currentPage aSidebar_onglet" : "aSidebar_onglet" }
        to="/admin/news">
        <p className="aSidebar_text">Gestion Actualité</p>
      </Link>
      <Link className={
        page === "/admin/forfait" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        } to="/admin/forfait">
        <p className="aSidebar_text">Gestion Forfait</p>
      </Link>
    </div>
  );
};
export default AdminSidebar;
