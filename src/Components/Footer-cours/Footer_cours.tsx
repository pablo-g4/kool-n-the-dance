import React, { Component } from "react"
import { Forfait } from "../../Models/Forfait"
import _ from "lodash"
import "./Footer_cours.css"

const Footer_cours = ({ forfaits } : { forfaits?: Forfait[]}) => {
  return (
    <>
      <div className="red-bg p-4">
        <div className="row">
          {
            forfaits?.length && _.map(forfaits,(forfait, index) => (
              <div key={index} className="col-md-4 col-xs-12 text-white">
                <p className="p-cours-titre">{forfait.title}</p>
                <div>
                  <p
                    className="px-2"
                   style={{
                    whiteSpace: 'pre-line',
                  }
                  }>{forfait?.description?.join('\n')}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="d-grid text-center gap-2 col-6 mx-auto">
          <a href="mailto:koolnthedance@gmail.com" className="footer-button-cours" type="button">
            <p className="margin-btt">AUTRES FORFAITS SUR DEMANDE</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer_cours;
