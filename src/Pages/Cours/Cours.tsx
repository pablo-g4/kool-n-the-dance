import _ from "lodash"
import React, { useEffect, useState } from "react"
import Header_cours from "../../Components/Header_cours/Header_cours"
import Footer_cours from "../../Components/Footer-cours/Footer_cours"
import Carrousel_Activite from "../../Components/Carrousel_Activite/Carrousel"
import Carrousel_Yellow from "../../Components/Carrousel_Activite/Carrousel_Yellow"
import Carrousel_Red from "../../Components/Carrousel_Activite/Carrousel_Red"
import { getAllForfaits } from "../../Controllers/forfait"
import { Forfait } from "../../Models/Forfait"

const Cours = () => {

  const [forfaits, setForfaits] = useState<Forfait[]>()

  const fetchData = async () => {
    const allForfaits = await getAllForfaits()
    setForfaits(allForfaits)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header_cours/>
      <Carrousel_Activite/>

      <Carrousel_Yellow/>
      <Carrousel_Red/> 
      {
        _.filter(forfaits, 'isBasic')?.length ? (
          <Footer_cours forfaits={_.filter(forfaits, 'isBasic')}/>
        ) : ('Pas de forfaits disponibles')
      }
    </div>
  );
};

export default Cours;


