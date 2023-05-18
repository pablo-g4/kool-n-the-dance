import React from "react";
import Footer from "../../Components/Footer/Footer";
import {HeaderCours} from "../../Components/HeaderCours/HeaderCours";
import Footer_cours from "../../Components/Footer-cours/Footer_cours";

import { CarrouselActivite } from "../../Components/Carrousel_Activite/CarrouselActivite";
import { CarrouselYellow } from "../../Components/Carrousel_Activite/CarrouselYellow";
import { CarrouselRed } from "../../Components/Carrousel_Activite/CarrouselRed";

const Cours = () => {
  return (
    <div>
      <HeaderCours />
      <CarrouselActivite></CarrouselActivite>
      <CarrouselYellow></CarrouselYellow>
      <CarrouselRed></CarrouselRed>
      <Footer_cours />
    </div>
  );
};

export default Cours;


