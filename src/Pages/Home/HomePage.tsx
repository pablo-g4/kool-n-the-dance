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
import { Planning } from '../../Models/Planning'
import { getAllPlanning } from '../../Controllers/planning'
import { getAllNews } from '../../Controllers/news'
import _ from 'lodash'
import { formatDateDDMMYY } from '../../Utils/utils'
import { News } from '../../Models/News'
import { Cours, COURSES_TYPES } from '../../Models/Cours'
import { getAllCours } from '../../Controllers/cours'
import { Forfait } from '../../Models/Forfait'
import { getAllForfaits, getAllBasicForfait } from '../../Controllers/forfait'
import CarouselSlide from '../../Components/Carrousel_Activite/CarrouselSlideDanses'
import CarouselSlideFitness from '../../Components/Carrousel_Activite/CarrouselSlideBienEtre'
import { CarouselSlideForfait } from '../../Components/Carrousel_Activite/CarouselSlideForfait'

export const HomePage = () => {

  const today = new Date()

  const [planningForTheDay, setPlanningForTheDay] = useState<Planning[]>([])
  const [allNews, setAllNews] = useState<News[]>([])
  const [allCourses, setAllCours] = useState<Cours[]>([])
  const [allForfaits, setAllForfaits] = useState<Forfait[]>([])
  const [currentTab, setCurrentTab] = useState('danse')

  const filteredPlanningForTheDay = () => {
    return _.filter(planningForTheDay, (planning) => today.getDay() === new Date(planning.startDate).getDay() && today.getMonth() === new Date(planning.startDate).getMonth() && today.getFullYear() === new Date(planning.startDate).getFullYear())
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
    let news = await getAllNews()
    news = _.orderBy(news, 'creationDate', 'desc')
    setAllNews([..._.take(news, 3)])
  }

  const fetchAndSetCours = async () => {
    let cours = await getAllCours()
    setAllCours(cours)
  }

  const fetchAndSetPlanning = async () => {
    let planning = await getAllPlanning()
    setPlanningForTheDay(planning)
  }

  const fetchAndSetForfaits = async () => {
    const forfaits = await getAllForfaits()
    setAllForfaits(forfaits)
  }

  useEffect(() => {
    fetchAndSetNews()
    fetchAndSetPlanning()
    fetchAndSetCours()
    fetchAndSetForfaits()
  }, [])

  const getDansesCours = () => _.filter(allCourses, ['courseType', COURSES_TYPES.DANSES])

  const getFitnessCours = () => _.filter(allCourses, ['courseType', COURSES_TYPES.FITNESS])

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
                    type="button"
                    className="button_danser d-block mx-auto opacity-full col-12"
                  >
                    DANSER
                  </button>
                  <button
                    type="button"
                    className="button_fitness  d-block mx-auto opacity-full"
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

      <div className="row mx-0 justify-content-center">
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
                )) : <p>Pas de cous actuellement</p>
              )
            }
            {
              currentTab === 'fitness' && (
                getFitnessCours().length ? _.map(getFitnessCours(), (fitness,index) => (
                  <CarouselSlideFitness cours={fitness} key={index} />
                )) : <p>Pas de cours de Fitness actuellement</p>
              )
            }
            {
              currentTab === 'forfait' && (
                allForfaits.length ? _.map(allForfaits, (forfait, index) => (
                    <CardHomeCours cours={forfait}/>
                )) : <div>Pas de forfait actuellement</div>
              )
            }

          </Carousel>
        </div>
        <div className='col-12  d-flex justify-content-end'>
          <p className="my-2">
            <Link to="/cours" className='none'>
              <a href='' className="link-accueil">Voir tout les cours  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
            </Link>
          </p>
        </div>
      </div>

      <div className='d-flex justify-content-center'>

      </div>
      <div>
        <img className="reverse-wave" src={Trace}></img>
      </div>
      <div className="row bg-violet mt-">
        <div className="col-12 ">
          <p className="text-white text-center titre-planning">
            Planning du jour
          </p>
        </div>
        {
          filteredPlanningForTheDay().length ?
            filteredPlanningForTheDay().map((planning, index) => (
              <div key={index} className="col-lg-2 col-6 spacingCol">
                <CardHomePlanning
                  horaire={`${new Date(planning?.startDate).getHours()}h` + '-' + `${new Date(planning?.endDate).getHours()}h`}
                  titre={planning.title}
                  text="Pour enfants de 6-9 ans"
                  src=""
                  key={index}
                ></CardHomePlanning>
              </div>
            )) : (
              <div className='col-12 text-center my-4'>
                <h3 className="text-white">Aucun planning disponible pour le {new Date().toLocaleDateString("fr-FR")}</h3>
              </div>
            )
        }
      </div>


      <div className='check-gonzague my-5'>
        <div className="row justify-content-center mt-4 mb-4 ">
          <h1 className="title-home">Actualités</h1>
        </div>
        <div className="row p-4">
          {
            allNews.length && _.map(allNews, (news, index) => (
              <div key={index} className="col-md-4 col-sm-12">
                <CardHomeActualite news={news}></CardHomeActualite>
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
          <div className='row'>
            <div className="col-md-6 col-sm-12 ">
              <CardTemoignage img={Fitness} nom="Maria Mercier (élève)" text="Camille est une coach sportive dynamique qui donne l'envie de nous surpasser. Elle est géniale, la musique sur laquelle on danse est super. A la fin du cours on a la pêche. Tout est là pour donner envie d'y aller et de se bouger, l'équipe est sympa. Je la conseille à 2000%"></CardTemoignage>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <CardTemoignage img={Forfait2} nom="Baumier Elise (élève)" text="Super prof! Dynamique, toujours de bonne humeur et soucieuse de ses élèves!"></CardTemoignage>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <CardTemoignage img={Danse} nom="Merckling Pascalle (élève)" text="Dynamique, bienveillante et très  à l'écoute  de ses élèves.  Elle ne compte pas son temps pour assurer des cours de qualité.  Tout ça  dans une excellente ambiance. On en redemande. Cours d excellente qualité  à  la portée  de tous  avec des prix attractifs et un grand respect des règles  en vigueur par rapport au Covid."></CardTemoignage>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <CardTemoignage img={Forfait2} nom="Amielle" text="J'ai adoré dès le premier cours! Ambiance et prof géniale qui donne envie de venir en cours de sport! Je recommande +++!"></CardTemoignage>
            </div>
          </div>
        </div>
      </div>

      <div className='my-5 mx-2 pb-5'>
        <h1 className=" text-center title-home">Galerie</h1>
        <div className='row'>
          {/* Prendre une div ci dessous et boucler la div sur les images recup en bdd ( 3 si possible ) */}
          <div className='col-lg-4 col-12 my-2'>
            <img src={Danse} width={"100%"} height={"100%"}/>
          </div>
          <div className='col-lg-4 col-12 my-2' >
            <img src={Fitness} width={"100%"} height={"100%"} />
          </div>
          <div className='col-lg-4 col-12 my-2'>
            <img src={Forfait2} width={"100%"} height={"100%"} />
          </div>
        </div>
        <p className="  float-right my-2">
          <Link to="/galerie" className='none'>
            <a href='' className="link-accueil ">Voir la galerie  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </Link>

        </p>
      </div>
    </>
  );
}
