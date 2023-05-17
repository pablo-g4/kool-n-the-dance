import React, { Component } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import imgtest from "../../images/Galerie/DAN_0568inv.png"
import "./cardTemoignage.css"

const CardTemoignage = ({ img = "", nom = "", text = "" }) => {
  return (
    <>
        <div>
            <div className="d-flex my-5">
                <div className="col-6">
                    <img src={imgtest} className="rounded  w-50 m-auto d-block" />
                </div>
             
                <div className="d-block">
                    <div className="d-flex">
                        <div className="col-6">
                            <span className="nom">
                                {nom}
                            </span>
                        </div>
                     
                        <span className="col-6">
                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                        </span>
                    </div>
                    <p className="col-12">
                        {text}
                    </p>
                </div>
            </div>
        

        </div>
    </>
  );
};

export default CardTemoignage;