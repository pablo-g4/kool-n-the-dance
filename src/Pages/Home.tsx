import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import background_top_image from "../images/Galerie/DAN_0809inv.png";
import "./DAN_0568inv@2x.jpg";
import logo_top from "./Logo@2x.jpg";
import vague from "./Tracé 101@2x.jpg";
import rosas from "./Tracé 230@2x.jpg";
import Card from "../Components/Card/Card";
import CardRight from "../Components/CardRight/CardRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import CardHomePlanning from "../Components/CardHomePlanning/CardHomePlanning";

const Home = () => {
  return (
    <>
      <header>
        <div className="row">
          <div className="col">
            <div className="logo_haut_de_page">
              <img src={logo_top} />
            </div>
          </div>
          <div className="col">
            <div className="rosas">
              <div className="row">
                <p className="text_haut col-sm-6 mx-auto">
                  J'ai une thérapie, elle s'appelle "Danse et Fitness !"
                </p>
              </div>
              <div className="row">
                <p className="text_bas col-sm-6 mx-auto">Je veux...</p>
              </div>

              <div className="row">
                <button
                  type="button"
                  className="button_danser col-sm-6 mx-auto"
                >
                  DANSER
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="button_fitness col-sm-6 mx-auto "
                >
                  FAIRE DU FITNESS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="photo_haut_de_page">
          <img src={background_top_image} />
        </div>

        <div className="vague_sous_photo">
          <img className=" rotation" src={vague} />
        </div>
      </header>
      <div className="row bg-violet">
        <div className="col-12 ">
          <p className="text-white text-center titre-planning">
            Planning du jour
          </p>
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
        <div className="col">
          <CardHomePlanning
            horaire="8h-9h"
            titre="ZUMBA"
            text="Pour enfants de 6-9 ans"
          ></CardHomePlanning>{" "}
        </div>
      </div>
      <div>
        <div className="row justify-content-center mt-4 mb-4  ">
          <h1 className="">Actualité</h1>
        </div>
        <div className="d-flex flex ">
          <div className="col h-30 ">
            <CardRight></CardRight>
          </div>
          <div className="col ">
            <CardRight></CardRight>
          </div>
          <div className="col ">
            <CardRight></CardRight>
          </div>
        </div>
        <div className="redirection  row justify-content-end">
          <p>Voir toute l'actualité </p>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </div>

      <div>
        <div className="parent">
          <div className="div1">
            <p>1</p>{" "}
          </div>
          <div className="div2">
            <p>2</p>{" "}
          </div>
          <div className="div3">
            {" "}
            <p>3</p>
          </div>
          <div className="div4">
            <p>4</p>{" "}
          </div>
          <div className="div5">
            <p>5</p>{" "}
          </div>
          <div className="div6">
            <p>6</p>{" "}
          </div>
          <div className="div7">
            <p>7</p>{" "}
          </div>
          <div className="div8">
            <p>8</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
