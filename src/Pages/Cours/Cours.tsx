import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header_cours from "../../Components/Header_cours/Header_cours";
import Footer_cours from "../../Components/Footer-cours/Footer_cours";
import Carrousel_Activite from "../../Components/Carrousel_Activite/Carrousel";
const Cours = () => {
  return (
    <div>
      <Header_cours />
      <Carrousel_Activite></Carrousel_Activite>
      <Footer_cours />
    </div>
  );
};

export default Cours;


