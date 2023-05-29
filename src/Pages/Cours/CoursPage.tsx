import _ from "lodash"
import React, { useEffect, useState } from "react"
import { HeaderCours } from "../../Components/HeaderCours/HeaderCours"
import Footer_cours from "../../Components/Footer-cours/Footer_cours"
import { CarrouselActivite } from "../../Components/Carrousel_Activite/CarrouselActivite"
import { CarrouselYellow } from "../../Components/Carrousel_Activite/CarrouselYellow"
import { CarrouselRed } from "../../Components/Carrousel_Activite/CarrouselRed"
import { getAllForfaits } from "../../Controllers/forfait"
import { COURSES_TYPES } from "../../Models/Cours"
import { getAllCours } from "../../Controllers/cours"
import { ForfaitVM } from "../../viewModels/ForfaitVM"
import { getAllFiles } from "../../Controllers/files"
import { CoursVM } from "../../viewModels/CoursVM"

export const CoursPage = () => {

  const [forfaits, setForfaits] = useState<ForfaitVM[]>()
  const [cours, setCours] = useState<CoursVM[]>()

  const fetchData = async () => {
    const allForfaits = await getAllForfaits()
    const allForfaitsVM = _.map(allForfaits, forfait => ForfaitVM.fromForfait(forfait))
    const allCours = await getAllCours()
    const allCoursVM = _.map(allCours, cours => CoursVM.fromCours(cours))
    const files = await getAllFiles()

    if (allForfaitsVM.length) {
      _.map(allForfaitsVM, (forfaitVM) => {
        if(!forfaitVM.isBasic) {
          if(forfaitVM.imageFileId) {
            const foundImage = _.find(files, file => file.id === forfaitVM.imageFileId)
            if(foundImage) forfaitVM.imageFile = foundImage
          }
          if(forfaitVM.associatedCoursesId.length) {
            _.map(forfaitVM.associatedCoursesId, associatedCoursId => {
              const foundedCourse = _.find(allCours, cours => cours.id === associatedCoursId)
              if (foundedCourse) forfaitVM.associatedCourses.push(foundedCourse)
            })
          }
        }
      })
      setForfaits(allForfaitsVM)
    }

    if(allCoursVM.length) {
      _.map(allCoursVM, (coursVM) => {
        if (coursVM.imageFileId) {
          const foundImage = _.find(files, file => file.id === coursVM.imageFileId)
          if (foundImage) coursVM.imageFile = foundImage
        }
      })
    }
    
    setCours(allCoursVM)
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
          <CarrouselRed forfaitsVM={getCustomForfaits()}/> 
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



