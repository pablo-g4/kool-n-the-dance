import _ from 'lodash'
import React, { useEffect, useState, useCallback } from 'react'
import "./Home.css"

import "../../Assets/Images/DAN_0568inv@2x.jpg"

import logo_top from '../../Assets/Images/Logo@2x.png'
import rosas from '../../Assets/Images/DAN_0568inv.png'

import Danse from "../../Assets/Images/Cours/Danses.jpg"
import Fitness from "../../Assets/Images/Cours/Fitness.jpeg"
import Forfait2 from "../../Assets/Images/Cours/Forfaits.jpeg"

import CardHomeActualite from '../../Components/CardHomeActualite/CardHomeActualite'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import CardHomePlanning from "../../Components/CardHomePlanning/CardHomePlanning"
import CardHomeCours from "../../Components/cardHomeCours/cardHomeCours"
import { Carousel } from '@mantine/carousel'
import CardTemoignage from '../../Components/cardTemoignage/cardTemoignagne'

import Trace from "../../Assets/Images/Tracé 101.png"

import Rosas from "../../Assets/Images/Tracé 230.png"

import { Link } from "react-router-dom"
import { PlanningVM } from '../../viewModels/PlanningVM'
import { getAllPlanning } from '../../Controllers/planning'
import { getAllNews } from '../../Controllers/news'
import { News } from '../../Models/News'
import { Cours, COURSES_TYPES } from '../../Models/Cours'
import { getAllCours } from '../../Controllers/cours'
import { Forfait } from '../../Models/Forfait'
import { getAllForfaits } from '../../Controllers/forfait'
import CarouselSlide from '../../Components/Carrousel_Activite/CarrouselSlideDanses'
import CarouselSlideFitness from '../../Components/Carrousel_Activite/CarrouselSlideBienEtre'
import { getAllTemoignages } from '../../Controllers/temoignages'
import { Temoignages } from '../../Models/Temoignages'
import { NewsVM } from '../../viewModels/NewsVM'
import { ForfaitVM } from '../../viewModels/ForfaitVM'
import { getAllFiles } from '../../Controllers/files'
import { CoursVM } from '../../viewModels/CoursVM'
import { COLLECTION } from '../../db/collection'
import { FilesVM } from '../../viewModels/FilesVM'
import { getAllBookmarks } from '../../Controllers/bookmark'

export const HomePage = () => {

  const today = new Date()

  const [planningForTheDay, setPlanningForTheDay] = useState<PlanningVM[]>([])
  const [allNews, setAllNews] = useState<NewsVM[]>([])
  const [allCoursVM, setAllCoursVM] = useState<CoursVM[]>([])
  const [allForfaits, setAllForfaits] = useState<ForfaitVM[]>([])
  const [allTemoignages, setAllTemoignages] = useState<Temoignages[]>([])
  const [allGalerieFiles, setAllGalerieFiles] = useState<FilesVM[]>([])
  const [currentTab, setCurrentTab] = useState('danse')

  const getFilteredPlanningForTheDay = () => {
    let filteredPlanningForTheDay = _.filter(planningForTheDay, (planning) => today.getDay() === planning.start.getDay() && today.getMonth() === planning.start.getMonth() && today.getFullYear() === planning.start.getFullYear())
    return _.orderBy(filteredPlanningForTheDay, 'startDate', 'asc')
  }

  const isMobile = document.documentElement.clientWidth < 600;

  const getCurrentTabElementsLenght = () => {
    let isLenghtSuperior: boolean = true
    switch (currentTab) {
      case 'forfait':
        isLenghtSuperior = allForfaits.length > 3
        break;
      case 'danse':
        isLenghtSuperior = getDansesCours().length > 3
        break;
      case 'fitness':
        isLenghtSuperior = getFitnessCours().length > 3
        break;
    }
    return isLenghtSuperior
  }

  const fetchAndSetNews = async () => {
    let allCurrentNews = await getAllNews()
    let allNewsVM = _.map(allCurrentNews, news => NewsVM.fromNews(news) )
    allNewsVM = _.orderBy(allNewsVM, 'creationDate', 'desc')
    setAllNews([..._.take(allNewsVM, 3)])
  }


  const fetchAndSetTemoignages = async () => {
    const temoignages = await getAllTemoignages()
    setAllTemoignages(temoignages)
  }


  const fetchAndSetData = async () => {
    const files = await getAllFiles()
    const allBookmarks = await getAllBookmarks()
    let galerieFiles = _.filter(files, ['associatedCollection', COLLECTION.GALLERY])
    if (galerieFiles.length){
       let allGaleriesFilesVM = _.map(galerieFiles, galerieFile => FilesVM.fromFiles(galerieFile))
      _.map(allGaleriesFilesVM, (galerieFileVM) => {
        const foundedBookmark = _.find(allBookmarks, bookmark => bookmark.bookmarkdId === galerieFileVM.id)
        if (foundedBookmark) galerieFileVM.bookmark = foundedBookmark
      })
      let filesBookmarked: FilesVM[] = [] 
      _.filter(allGaleriesFilesVM, fileVMItem =>  {
          if (fileVMItem.bookmark.id) filesBookmarked.push(fileVMItem) 
      })

      if(filesBookmarked) setAllGalerieFiles(_.orderBy(filesBookmarked, 'bookmark.orderByAsNumber','asc'))
    }
    const allCours = await getAllCours()
    const allCurrentCoursVM = _.map(allCours, cours => CoursVM.fromCours(cours))

    if(allCurrentCoursVM.length) {
      _.map(allCurrentCoursVM, coursVM => {
        if(coursVM.imageFileId) {
          const foundImage = _.find(files, file => file.id === coursVM.imageFileId)
          if (foundImage) coursVM.imageFile = foundImage
        }
      })
    }

    const forfaits = await getAllForfaits()
    const allForfaitsVM = _.map(forfaits, forfaitVM => ForfaitVM.fromForfait(forfaitVM))

    if(allForfaitsVM.length) {
      _.map(allForfaitsVM, forfaitVM => {
        if(!forfaitVM.isBasic) {
          if(forfaitVM.imageFileId) {
            const foundImage = _.find(files, file => file.id === forfaitVM.imageFileId)
            if(foundImage) forfaitVM.imageFile = foundImage
          }
          if(forfaitVM.associatedCoursesId.length) {
            _.map(forfaitVM.associatedCoursesId, associatedCoursId => {
              const foundedCourse = _.find(allCurrentCoursVM, cours => cours.id === associatedCoursId)
              if(foundedCourse) forfaitVM.associatedCourses.push(foundedCourse)
            })
          }
        }
      })
    }

    const allPlanning = await getAllPlanning()
    const allPlanningVM = _.map(allPlanning, planning => PlanningVM.fromPlanning(planning))
    _.map(allPlanningVM, planningVM => {
      if(planningVM.coursId) {
        const foundedCours = _.find(allCurrentCoursVM, currentCoursVM => currentCoursVM.id ===  planningVM.coursId)
        if(foundedCours) planningVM.coursVM = foundedCours
      }
    })

    let allCurrentNews = await getAllNews()
    let allNewsVM = _.map(allCurrentNews, news => NewsVM.fromNews(news) )
    allNewsVM = _.orderBy(allNewsVM, 'creationDate', 'desc')
    _.map(allNewsVM, newsVM => {
      if(newsVM.attachedFileId) {
        const foundAttachedFile = _.find(files, file => file.id === newsVM.attachedFileId)
        if (foundAttachedFile) newsVM.attachedFile = foundAttachedFile
      }
      if(newsVM.imageFileId) {
        const foundImage = _.find(files, file => file.id === newsVM.imageFileId)
        if (foundImage)  newsVM.imageFile = foundImage
      }
    })
    setAllNews([..._.take(allNewsVM, 3)])

    setPlanningForTheDay(allPlanningVM)
    setAllCoursVM(allCurrentCoursVM)
    setAllForfaits(allForfaitsVM)
  }

  useEffect(() => {
    fetchAndSetData()
    fetchAndSetTemoignages()
  }, [])

  const getDansesCours = () => _.filter(allCoursVM, ['courseType', COURSES_TYPES.DANSES])

  const getFitnessCours = () => _.filter(allCoursVM, ['courseType', COURSES_TYPES.FITNESS])

  const displayCard = (tab: string) => {
    setCurrentTab(tab)
    changeButton(tab)
  }

  const changeButton = (tab: string) => {
    switch (tab) {
      case 'forfait':
        document.getElementById('btn-fitness')!.classList.remove('btn-selected');
        document.getElementById('btn-forfait')!.classList.add('btn-selected');
        document.getElementById('btn-danse')!.classList.remove('btn-selected');
        document.getElementById('btn-fitness')!.classList.add('btn-unselected');
        document.getElementById('btn-forfait')!.classList.remove('btn-unselected');
        document.getElementById('btn-danse')!.classList.add('btn-unselected');
        break;
      case 'danse':
        document.getElementById('btn-fitness')!.classList.remove('btn-selected');
        document.getElementById('btn-forfait')!.classList.add('btn-unselected');
        document.getElementById('btn-danse')!.classList.remove('btn-unselected');
        document.getElementById('btn-fitness')!.classList.add('btn-unselected');
        document.getElementById('btn-forfait')!.classList.remove('btn-selected');
        document.getElementById('btn-danse')!.classList.add('btn-selected');
        break;
      case 'fitness':
        document.getElementById('btn-fitness')!.classList.remove('btn-unselected');
        document.getElementById('btn-forfait')!.classList.add('btn-unselected');
        document.getElementById('btn-danse')!.classList.remove('btn-selected');
        document.getElementById('btn-fitness')!.classList.add('btn-selected');
        document.getElementById('btn-forfait')!.classList.remove('btn-selected');
        document.getElementById('btn-danse')!.classList.add('btn-unselected');
        break;
    }
  }


  return (
    <>
      <div className='header-container'>
        <header className="header mb-8 ">
          <div className="row mb-8 mx-0">
            <div className="col-md-4 m-auto hide-img ">
              <div className="logo_haut_de_page mx-auto ">
                <img className="logo_haut_de_page" src={logo_top} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-7 mx-0">
              <div className="row pb-7 ">
                <div className="rosas-container h-75">
                  <img className='rosas' src={Rosas} />
                  <div>
                    <p className="text_haut col-lg-9  col-sm-12  mx-auto d-block text-center">
                      J'ai une thérapie, elle s'appelle "Danse et Fitness !"
                    </p>
                    <p className="text_bas col-12 text-center">Je veux...</p>
                  </div>

                  <button
                    className="button_danser d-block mx-auto opacity-full col-12"
                    onClick={() => displayCard('danse')}
                  >
                    DANSER
                  </button>
                  <button
                    type="button"
                    className="button_fitness  d-block mx-auto opacity-full"
                    onClick={() => displayCard('fitness')}
                  >
                    FAIRE DU FITNESS
                  </button>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>

      <div className='wave-container'>
        <img className="wave" src={Trace}></img>
      </div>

      <div className="row mx-0 justify-content-center" data-spy="scroll">
        <div className="col-12 text-center">
          <button
            id="btn-danse"
            className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton btn-selected"
            onClick={() => displayCard('danse')}>
            Danse
          </button>
          <button
            id="btn-fitness"
            className="bg-white col-lg-3 col-4 h-100 align-bottom txt-bouton btn-unselected"
            onClick={() => displayCard('fitness')}>
            Fitness et bien-être
          </button>
          <button
            id="btn-forfait"
            className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton btn-unselected"
            onClick={() => displayCard('forfait')}>
            Forfait
          </button>
        </div>
        <div className='d-flex justify-content-center' style={{
          border: 'solid #644a82',
          borderRadius: '20px',
          width: isMobile ? '80%' : '60%'
        }}>
          <Carousel
            style={{
              width: '80%',
              padding: '2rem',
            }}
            withControls={getCurrentTabElementsLenght()}
            loop={getCurrentTabElementsLenght()}
            draggable={isMobile ? true :getCurrentTabElementsLenght()}
            height={350}
            slidesToScroll={1}
            slideSize={isMobile ? "100%" : "33.333333%"}
            slideGap='xs'
            align="start">
            {
              currentTab === 'danse' && (
                getDansesCours().length ? _.map(getDansesCours(), (danse, index) => (
                  <CarouselSlide key={index} cours={danse} />
                )) : <p>Pas de cours de danse disponible actuellement</p>
              )
            }
            {
              currentTab === 'fitness' && (
                getFitnessCours().length ? _.map(getFitnessCours(), (fitness,index) => (
                  <CarouselSlideFitness cours={fitness} key={index} />
                )) : <p>Pas de cours de Fitness disponible actuellement</p>
              )
            }
            {
              currentTab === 'forfait' && (
                allForfaits.length ? _.map(_.filter(allForfaits, ['isBasic', false]), (forfait, index) => (
                    <CardHomeCours key={index} cours={forfait}/>
                )) : <div>Pas de forfait disponible actuellement</div>
              )
            }

          </Carousel>
        </div>
        <div className='col-12  d-flex justify-content-end'>
          <p className="m-2">
            <Link to="/cours" className='none'>
              <a href='' className="link-accueil">Voir tous les cours  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
            </Link>
          </p>
        </div>
      </div>

      <div>
        <img className="reverse-wave" src={Trace}></img>
      </div>
      <div className="row bg-violet p-4">
        <div className="col-12 ">
          <p className="text-white text-center titre-planning">
            Planning du jour
          </p>
        </div>
        {
          getFilteredPlanningForTheDay().length ?
            getFilteredPlanningForTheDay().map((planning, index) => (
              <div key={index} className="col-lg-3 col-6 spacingCol">
                <CardHomePlanning
                  horaire={planning.startAndEndHourAsString}
                  titre={planning.coursVM.title}
                  src={planning.coursVM.imageUrl}
                  key={index}
                ></CardHomePlanning>
              </div>
            )) : (
              <div className='col-12 text-center my-4'>
                <h3 className="text-white">Aucun cours n'est disponible pour le {new Date().toLocaleDateString("fr-FR")}</h3>
              </div>
            )
        }
      </div>
      <div className='col-12  d-flex justify-content-end'>
        <p className="m-2">
          <Link to="/planning" className='none'>
            <a href='' className="link-accueil">Voir tout le planning  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </Link>
        </p>
      </div>


      <div className='check-gonzague my-5'>
        <div className="row justify-content-center mt-4 mb-4 ">
          <h1 className="title-home">Actualités</h1>
        </div>
        <div className="row p-4">
          {
            allNews.length && _.map(allNews, (news, index) => (
              <div key={index} className="col-md-4 col-sm-12">
                <CardHomeActualite newsVM={news}></CardHomeActualite>
              </div>
            ))
          }
          <div className='check-gonzague nathounet-leadtech mx-4'>
            <Link to="/news" className='none'>
              <a href='' className="link-accueil ">Voir toutes les actualités <FontAwesomeIcon icon={faArrowCircleRight} /></a>
            </Link>
          </div>
        </div>
      </div>


      <div className='my-5'>
        <h1 className=" text-center title-home">Témoignages</h1>
        <div className="m-auto d-block ">
          {
            allTemoignages.length && (
              <div className='row'>
                {_.map(allTemoignages, (temoignage, index) => (
                  <div key={index} className="col-md-6 col-sm-12 ">
                    <CardTemoignage temoignage={temoignage}></CardTemoignage>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>

      <div className='m-2 mx-2 pb-2'>
        <h1 className=" text-center title-home">Galerie</h1>
        <div className='row'>
          {/* Prendre une div ci dessous et boucler la div sur les images recup en bdd ( 3 si possible ) */}
          {
            allGalerieFiles.length && (_.map(allGalerieFiles, (galerieFile) => (
              <div className='col-lg-4 col-12 my-2'>
                {
                  galerieFile.isVideo ? (
                    <div>
                      <video width={'100%'} id={galerieFile.id} height={'100%'} controls>
                        <source src={galerieFile.fileUrl} type="video/mp4" />
                      </video>
                    </div>
                  ) :(
                    <img src={galerieFile.fileUrl} width={"100%"} height={"100%"} />
                  )
                }

              </div>
            ))
            )
          }
        </div>
        <p className="d-flex justify-content-end mx-2">
          <Link to="/galerie" className='none'>
            <a href='' className="link-accueil">Voir la galerie  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </Link>
        </p>
      </div>
    </>
  );
}
