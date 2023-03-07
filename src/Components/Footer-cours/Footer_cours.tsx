import React, { Component } from "react";
import "./Footer_cours.css";

const Footer_cours = () => {
    return (
      <>
        <div className="red-bg">
          <div className=" d-flex justify-content-between ">
            <div className="box-footer-cour">
              <p className="p-cours-titre">Forfait Danse Enfant</p>
              <div>
                <p>2 cours : 370 €/an</p>
                <p>3 cours : 450 €/an</p>
              </div>
              <p className="p-cours-titre"> Full Pass</p>
              <div>
                <p>Accès à tous les cours : 990 €/an</p>
              </div>
            </div>
            <div className="box-footer-cour">
              <p className="p-cours-titre">Forfait Danses Adultes</p>
              <div>
                <p>2 cours : 460 €/an </p>
                <p>3 cours : 650 €/an </p>
                <p>4 cours : 850 €/an </p>
              </div>
              <p className="p-cours-titre">Forfait Duo</p>
              <div>
                <p>
                  Pass Parent+Enfant sur cours Zumba ou PortDeBras : 395 €/an
                </p>
              </div>
            </div>
            <div className="box-footer-cour">
              <p className="p-cours-titre">Forfait Danses et Fitness</p>
              <div>
                <p>1 cours Danse + 1 cours Fitness : 420 €/an</p>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="footer-button-cours" type="button">
              <p className="margin-btt">AUTRES FORFAITS SUR DEMANDE</p>
            </button>
          </div>
        </div>
      </>
    );
}

export default Footer_cours;
