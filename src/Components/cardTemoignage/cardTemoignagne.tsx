import React, { Component } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import imgtest from '../../Assets/Images/DAN_0568inv.png'
import "./cardTemoignage.css"
import { Temoignages } from "../../Models/Temoignages"
import _ from "lodash"

const CardTemoignage = ({ temoignage, children } : { temoignage : Temoignages, children?: any}) => {
  return (
    <>
        <div>
            {
                children
            }
            <div className="d-flex my-5">
                <div className="col-6">
                    <img src={temoignage.imageUrl} className="rounded  w-50 m-auto d-block" />
                </div>
             
                <div className="d-block">
                    <div className="d-flex">
                        <div className="col-6">
                            <span className="nom">
                                {temoignage.fullName}
                            </span>
                        </div>
                        <span className="col-6">
                            {
                                _.times(temoignage.stars, (index) => (<FontAwesomeIcon key={index} icon={faStar} className="text-warning" />))
                            }
                        </span>
                    </div>
                    <p className="col-12">
                        {temoignage.description}
                    </p>
                </div>
            </div> 
        </div>
    </>
  );
};

export default CardTemoignage;