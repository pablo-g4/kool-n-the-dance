import React from "react";
import "./AdminSidebar.css";
import LogoBlanc from "../../images/LogoBlanc.png";

const AdminSidebar = () => {
  return (

    //Ajouter le className 'currentPage' à l'onglet correspondant à la page active
    //
    //Essayer de faire les flêches sur l'onglet actif
    //
    //D'après la maquettes enlevé Navbar (top) et footer
    <div className="aSidebar">
      <div className="aSidebar_logo"><img className='LogoBlanc' src={LogoBlanc}></img></div>
      <a className="aSidebar_onglet" href="#">
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
