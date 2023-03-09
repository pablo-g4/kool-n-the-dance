import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header_cours from "../../Components/Header_cours/Header_cours";
import Footer_cours from "../../Components/Footer-cours/Footer_cours";
import Cart from "../../Components/Card_test/Cart";
import CardCour from "../../Components/Card_flip/Cardf";
import CardCours from "../../Components/CardCours/CardCours";
import Cardon from "../../Components/Card_onclick/Cardon";

const Cours = () => {
  return (
    <div>
      <Header_cours />
      
      
      <CardCour />
     
      <Footer_cours />
    </div>
  );
};

export default Cours;
