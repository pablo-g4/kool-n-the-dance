import React from "react";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="aSidebar">
      <div className="aSidebar_logo">img</div>
      <a className="aSidebar_onglet currentPage" href="#">
        <p className="aSidebar_text">Gestion Général</p>
      </a>
      <a className="aSidebar_onglet" href="#">
        <p className="aSidebar_text">Gestion Cours</p>
      </a>
      <a className="aSidebar_onglet" href="#">
        <p className="aSidebar_text">Gestion Planning</p>
      </a>
      <a className="aSidebar_onglet" href="#">
        <p className="aSidebar_text">Gestion Galerie</p>
      </a>
      <a className="aSidebar_onglet" href="#">
        <p className="aSidebar_text">Gestion Actualité</p>
      </a>
      <a className="aSidebar_onglet" href="#">
        <p className="aSidebar_text">Gestion Forfait</p>
      </a>
    </div>
  );
};
export default AdminSidebar;
