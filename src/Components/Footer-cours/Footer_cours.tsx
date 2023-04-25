import React, { Component } from "react";
import { Forfait } from "../../Models/Forfait";
import "./Footer_cours.css";

const Footer_cours = ({ forfaits } : { forfaits?: Forfait[]}) => {
  return (
    <>
      <div className="red-bg pt-5">
        <div className="row ">
          {
            forfaits?.length && forfaits?.map((forfait) => (
              <div className="col-md-4 col-xs-12">
              <p className="p-cours-titre">{forfait.title}</p>
              <div>
                <p style={{
                  whiteSpace: 'pre-line'
                }
                }>{forfait.description.split(/\r?\n|\r|\n/g)}</p>
              </div>
            </div>
            ))
          }
        </div>
        <div className="d-grid text-center gap-2 col-6 mx-auto">
          <button className="footer-button-cours" type="button">
            <p className="margin-btt">AUTRES FORFAITS SUR DEMANDE</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer_cours;
