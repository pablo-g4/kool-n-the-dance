import _ from "lodash"
import React, { useEffect, useState } from "react"
import { HeaderCours } from "../../Components/HeaderCours/HeaderCours"
import Footer_cours from "../../Components/Footer-cours/Footer_cours"
import { CarrouselActivite } from "../../Components/Carrousel_Activite/CarrouselActivite"
import { CarrouselYellow } from "../../Components/Carrousel_Activite/CarrouselYellow"
import { CarrouselRed } from "../../Components/Carrousel_Activite/CarrouselRed"
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
      <HeaderCours/>
      {
        getCoursDanse().length && (
          <CarrouselActivite allCours={getCoursDanse()}/>
        )
      }
      {
        getCoursFitness().length && (
          <CarrouselYellow allCours={getCoursFitness()}/>
        )
      }

      {
        getCustomForfaits().length && (
          <CarrouselRed forfaits={getCustomForfaits()}/> 
        )
      }

      {
        _.filter(forfaits, ['isBasic', false]).length ? (
          <Footer_cours forfaits={_.filter(forfaits, 'isBasic')} />
        ) : ('Pas de forfaits disponibles')
      }
    </div>
  );
};



