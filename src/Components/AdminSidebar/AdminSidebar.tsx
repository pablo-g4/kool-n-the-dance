import React, { useState } from "react"
import "./AdminSidebar.css"
import LogoBlanc from "../../Assets/Images/LogoBlanc.png"
import { Link } from "react-router-dom"
import { GrLogout } from "react-icons/gr"
import { logout } from "../../Authentification/authentication"

const AdminSidebar = ({ page = "" }) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
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
        <Link
          className={
            page == "/admin/cours" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
          } to="/admin/cours">
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
          className={page === "/admin/news" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"}
          to="/admin/news">
          <p className="aSidebar_text">Gestion Actualité</p>
        </Link>
        <Link className={
          page === "/admin/forfait" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        } to="/admin/forfait">
          <p className="aSidebar_text">Gestion Forfait</p>
        </Link>
        <Link className={
          page === "/admin/temoignages" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        } to="/admin/temoignages">
          <p className="aSidebar_text">Gestion Témoignages</p>
        </Link>
        <Link className={
          page === "/admin/logout" ? "currentPage aSidebar_onglet" : "aSidebar_onglet"
        } to="/admin/forfait" onClick={logout}>
          <p className="aSidebar_text"> <GrLogout size={25} color="white" /> Déconnexion</p>
        </Link>
    </div>
  );
};
export default AdminSidebar;
