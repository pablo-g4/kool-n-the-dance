import React, { useEffect, useState, useCallback } from 'react'
import Footer from "../Components/Footer/Footer"
import "./Home.css"
import background_top_image from "../images/Galerie/DAN_0809inv.png"
import "./DAN_0568inv@2x.jpg"
import logo_top from "./Logo@2x.png"
import vague from "./Tracé 101@2x.jpg"
import rosas from "../images/Galerie/DAN_0568inv.png"
import Card from "../Components/Card/Card"
import CardHomeActualite from "../Components/CardHomeActualite/CardHomeActualite"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import CardHomePlanning from "../Components/CardHomePlanning/CardHomePlanning"
import CardHomeCours from "../Components/cardHomeCours/cardHomeCours"
import { Carousel } from '@mantine/carousel'
import CardTemoignage from '../Components/cardTemoignage/cardTemoignagne'
import Trace from "../Assets/Images/Tracé 101.png"
import Rosas from "../Assets/Images/Tracé 230.png"
import Php from "../Assets/Images/carousel/carousel3.jpeg"
import { Link } from "react-router-dom"
import { Planning } from '../Models/Planning'
import { getAllPlanning } from '../Controllers/planning'
import _ from 'lodash'

const Home = () => {

  const today = new Date()

  const [planningForTheDay, setPlanningForTheDay] = useState<Planning[]>([])

  function displayCardData(test: number) {
    if (test != null)
      document.getElementById('data_cours_' + test)!.style.visibility = 'visible';
  }

  const filteredPlanningForTheDay = () => {
    return _.filter(planningForTheDay, (planning) => today.getDay() === new Date(planning.startDate).getDay() && today.getMonth() === new Date(planning.startDate).getMonth() && today.getFullYear() === new Date(planning.startDate).getFullYear())
  }

  function hideCardData(test: number) {
    if (test != null)
      document.getElementById('data_cours_' + test)!.style.visibility = 'hidden';
  }
  const isMobile = document.documentElement.clientWidth < 600;

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.getElementById('fitness')!.style.display = 'none';
    document.getElementById('forfait')!.style.display = 'none';
  })

  useEffect(() => {

    const fetchPlanning = async () => {
      let allPlanning = await getAllPlanning()
      setPlanningForTheDay(allPlanning)
    }

    fetchPlanning()
  },[])



  function displayCard(test: string) {
    switch (test) {
      case 'forfait':
        document.getElementById('fitness')!.style.display = 'none';
        document.getElementById('forfait')!.style.display = 'block';
        document.getElementById('danse')!.style.display = 'none';
        break;
      case 'danse':
        document.getElementById('fitness')!.style.display = 'none';
        document.getElementById('forfait')!.style.display = 'none';
        document.getElementById('danse')!.style.display = 'block';
        break;
      case 'fitness':
        document.getElementById('fitness')!.style.display = 'block';
        document.getElementById('forfait')!.style.display = 'none';
        document.getElementById('danse')!.style.display = 'none';
        break;
    }
    changeButton(test)

  }

  function changeButton(type: string) {
    switch (type) {
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
                  <img className='rosas' src={Rosas}/>
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
      <div className="row mx-0">
        <div className="col-12 text-center">
          <button id="btn-danse" className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton btn-selected" onClick={() => displayCard('danse')}>Danse</button>
          <button id="btn-fitness" className="bg-white col-lg-3 col-4 h-100 align-bottom txt-bouton btn-unselected" onClick={() => displayCard('fitness')}>Fitness et bien-être</button>
          <button id="btn-forfait" className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton btn-unselected" onClick={() => displayCard('forfait')}>Forfait</button>
        </div>
        <div className="col-12 h-100" id="danse">
          <div className="col-10 border-cours  col-lg-8 col-md-11   mx-auto h-100">
            <div className="row mt-4 mx-5w">
              <Carousel mx="auto" withIndicators height={380} className="carousel-home " slidesToScroll={isMobile ? 3 : 1} slideSize={isMobile ? "100%" : "33.333333%"}
                slideGap="md" loop
                align="start">
                <Carousel.Slide className=""><CardHomeCours ></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours></CardHomeCours></Carousel.Slide>
              </Carousel>

            </div>
          </div>
        </div>
        <div className="col-12 h-100 " id="fitness">
          <div className="col-10 border-cours  col-lg-8 col-md-8   mx-auto h-100">
            <div className="row mt-4 mx-5w">
              <Carousel mx="auto" withIndicators height={380} className="carousel-home" slidesToScroll={isMobile ? 3 : 1} slideSize={isMobile ? "100%" : "33.333333%"}
                slideGap="md" loop
                align="start">
                <Carousel.Slide className=""><CardHomeCours text="aaaaaaaa" titre="oooooooooo" src="" ></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours text="aaaaaaaa" titre="oooooooooo" ></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours text="aaaaaaaa" titre="oooooooooo" ></CardHomeCours></Carousel.Slide>

              </Carousel>

            </div>
          </div>
        </div>
        <div className="col-12 h-100 " id="forfait">
          <div className="col-10 border-cours  col-lg-8 col-md-8   mx-auto h-100">
            <div className="row mt-4 mx-5w">
              <Carousel mx="auto" withIndicators height={380} className="carousel-home" slidesToScroll={isMobile ? 3 : 1} slideSize={isMobile ? "100%" : "33.333333%"}
                slideGap="md" loop
                align="start">
                <Carousel.Slide className=""><CardHomeCours ></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours></CardHomeCours></Carousel.Slide>
                <Carousel.Slide className=""><CardHomeCours></CardHomeCours></Carousel.Slide>

              </Carousel>

            </div>
          </div>
        </div>

      </div>
      <p className="  float-right my-2">
        <Link to="/cours" className='none'>
          <a href='' className="link-accueil ">Voir toute les cours  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
        </Link>
      </p>
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
          filteredPlanningForTheDay().length &&
          filteredPlanningForTheDay().map(planning => (

            <div className="col-lg-2 col-6 spacingCol">
              <CardHomePlanning
                horaire={ `${new Date(planning?.startDate).getHours()}h` + '-' + `${new Date(planning?.endDate).getHours()}h`}
                titre={planning.title}
                text="Pour enfants de 6-9 ans"
                src=""
              ></CardHomePlanning>
            </div>
          ))
        }
        {/* Prendre le planning ajd et boucler sur les activiter du jour   */}
      </div>


      <div>
        <div className="row justify-content-center mt-4 mb-4  ">
          <h1 className="title-home">Actualité</h1>
        </div>
        <div className="row ">
          {/* Prendre une div ci dessous boucler sur les 3 dernieres actualitér */}
          <div className="col-md-4 col-sm-12">
            <CardHomeActualite></CardHomeActualite>
          </div>
          <div className="col-md-4 col-sm-12">
            <CardHomeActualite></CardHomeActualite>
          </div>
          <div className="col-md-4 col-sm-11 ">
            <CardHomeActualite></CardHomeActualite>
          </div>
        </div>
        <p className="  float-right my-2">
          <Link to="/actualite" className='none'>
            <a href='' className="link-accueil ">Voir toute l'actualité  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </Link>
        </p>
      </div>
      <br />
      <div className='my-5'>
        <h1 className=" text-center title-home">Temoignage</h1>
        <div className="m-auto d-block ">
          <div className='row'>
            <div className="col-md-5 col-sm-12 w-75">
              <CardTemoignage img="" nom="" text=""></CardTemoignage>
            </div>
            <div className="col-md-5 col-sm-12 w-75">
              <CardTemoignage img="" nom="" text=""></CardTemoignage>
            </div>
            <div className="col-md-5 col-sm-12 w-75">
              <CardTemoignage img="" nom="" text=""></CardTemoignage>
            </div>
            <div className="col-md-5 col-sm-12 w-75">
              <CardTemoignage img="" nom="" text=""></CardTemoignage>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <h1 className=" text-center title-home">Galerie</h1>
        <div className='row'>
          {/* Prendre une div ci dessous et boucler la div sur les images recup en bdd ( 3 si possible ) */}
          <div className='col-lg-4 col-12 my-2'>
            <img src={rosas} width={"100%"} />
          </div>
          <div className='col-lg-4 col-12 my-2' >
            <img src={rosas} width={"100%"} />
          </div>
          <div className='col-lg-4 col-12 my-2'>
            <img src={rosas} width={"100%"} />
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
};

export default Home;
