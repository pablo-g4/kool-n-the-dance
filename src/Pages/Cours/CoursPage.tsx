import _ from "lodash"
import React, { useEffect, useState } from "react"
import Header_cours from "../../Components/Header_cours/Header_cours"
import Footer_cours from "../../Components/Footer-cours/Footer_cours"
import Carrousel_Activite from "../../Components/Carrousel_Activite/Carrousel"
import Carrousel_Yellow from "../../Components/Carrousel_Activite/Carrousel_Yellow"
import Carrousel_Red from "../../Components/Carrousel_Activite/Carrousel_Red"
import { getAllForfaits } from "../../Controllers/forfait"
import { Forfait } from "../../Models/Forfait"
import { Cours, COURSES_TYPES } from "../../Models/Cours"
import { getAllCours } from "../../Controllers/cours"

export const CoursPage = () => {

  const [forfaits, setForfaits] = useState<Forfait[]>()
  const [cours, setCours] = useState<Cours[]>()

  const fetchData = async () => {
    const allForfaits = await getAllForfaits()
    const allCours = await getAllCours()
    console.log('allForfaits', allForfaits);
    
    setForfaits(allForfaits)
    setCours(allCours)
  }

  const getCoursDanse = () => _.filter(cours, ['courseType', COURSES_TYPES.DANSES])

  const getCoursFitness = () => _.filter(cours, ['courseType', COURSES_TYPES.FITNESS])

  const getCustomForfaits = () => _.filter(forfaits, ['isBasic', false])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header_cours/>
      {
        getCoursDanse().length && (
          <Carrousel_Activite allCours={getCoursDanse()}/>
        )
      }
      {
        getCoursFitness().length && (
          <Carrousel_Yellow allCours={getCoursFitness()}/>
        )
      }

      {
        getCustomForfaits().length && (
          <Carrousel_Red forfaits={getCustomForfaits()}/> 
        )
      }

      {
        _.filter(forfaits, ['isBasic', false]).length ? (
          <Footer_cours forfaits={_.filter(forfaits, 'isBasic')}/>
        ) : ('Pas de forfaits disponibles')
      }
    </div>
  );
};



