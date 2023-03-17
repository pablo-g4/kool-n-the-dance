import React, { useState } from 'react';
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import background_top_image from "../images/Galerie/DAN_0809inv.png";
import "./DAN_0568inv@2x.jpg";
import logo_top from "./Logo@2x.png";
import vague from "./Tracé 101@2x.jpg";
import rosas from "./Tracé 230@2x.png";
import Card from "../Components/Card/Card";
import CardHomeActualite from "../Components/CardHomeActualite/CardHomeActualite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import CardHomePlanning from "../Components/CardHomePlanning/CardHomePlanning";

const Home = () => {

  function displayCardData(test : number) {
    if(test != null) 
      document.getElementById('data_cours_'+test)!.style.visibility = 'visible';
  }

  function hideCardData(test : number) {
    if(test != null) 
      document.getElementById('data_cours_'+test)!.style.visibility = 'hidden';
  }

  function displayCard(test : string) {
      switch(test){
        case 'forfait':
          document.getElementById('fitness')!.style.display = 'none';
          document.getElementById('forfait')!.style.display = 'block';
          document.getElementById('danse')!.style.display = 'none';
          console.log('test')
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
    
  }
  
  return (
    <>
      <header className="photo_haut_de_page mb-8 ">
        <div className="row mb-8 mx-0">
          <div className="col-md-4 m-auto hide-img ">
            <div className="logo_haut_de_page mx-auto">
              <img className="center" src={logo_top} />
            </div>
          </div>
          <div className="col-sm-12 col-lg-7 mx-0">
            <div className="row pb-7 ">
              <div className="rosas h-75">
                <div className="col-sm-7 col-xl-12 mx-auto">
                  <p className="text_haut col-lg-6 col-sm-12 mx-auto text-center">
                    J'ai une thérapie, elle s'appelle "Danse et Fitness !"
                  </p>
                </div>
                <div className="col-12 mx-auto">
                  <p className="text_bas col-12 text-center">Je veux...</p>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="button_danser d-block mx-auto opacity-full"
                  >
                    DANSER
                  </button>
                </div>
                <div className="col-12 ">
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
          
        </div>
       
        
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave " >
        <path fill="#644A82" fill-opacity="1" d="M0,224L40,234.7C80,245,160,267,240,277.3C320,288,400,288,480,272C560,256,640,224,720,181.3C800,139,880,85,960,69.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
      <div className="row mx-0">
        <div className="col-12 text-center">
          <button className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton" onClick={() => displayCard('danse')}>Danse</button> 
          <button className="bg-white col-lg-3 col-4 h-100 align-bottom txt-bouton" onClick={() => displayCard('fitness')}>Fitness et bien-être</button>
          <button className="bg-white col-lg-2 col-4 h-100 align-bottom txt-bouton" onClick={() => displayCard('forfait')}>Forfait</button>
        </div>
        <div className="col-12 h-100" id="danse">
          <div className="col-8 border-cours  mx-auto h-100">
            <div className="row mt-4 ">
              <div className="col-xl-4 col-sm-12 my-5">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(1)} onMouseOut={() => hideCardData(1)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">Zumba</h4>
                      <div id="data_cours_1" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-xl-4 col-sm-12 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(2)} onMouseOut={() => hideCardData(2)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">Zumba</h4>
                      <div id="data_cours_2" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-4 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(3)} onMouseOut={() => hideCardData(3)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">Zumba</h4>
                      <div id="data_cours_3" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 h-100 none-displayed-card" id="fitness">
          <div className="col-8 border-cours  mx-auto h-100">
            <div className="row mt-4 ">
              <div className="col-xl-4 col-sm-12 my-5">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(1)} onMouseOut={() => hideCardData(1)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga</h4>
                      <div id="data_cours_1" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-xl-4 col-sm-12 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(2)} onMouseOut={() => hideCardData(2)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga</h4>
                      <div id="data_cours_2" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-xl-4 col-sm-12 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(3)} onMouseOut={() => hideCardData(3)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga</h4>
                      <div id="data_cours_3" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 h-100 none-displayed-card" id="forfait">
          <div className="col-8 border-cours  mx-auto h-100">
            <div className="row mt-4 ">
              <div className="col-xl-4 col-sm-12 my-5">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(1)} onMouseOut={() => hideCardData(1)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga et danse</h4>
                      <div id="data_cours_1" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-xl-4 col-sm-12 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(2)} onMouseOut={() => hideCardData(2)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga et danse</h4>
                      <div id="data_cours_2" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
                <div className="col-xl-4 col-sm-12 my-5 hide-img">
                <div id="cours1" className="card card_cours rounded p-4 " onMouseOver={() => displayCardData(3)} onMouseOut={() => hideCardData(3)} >
                  <div className="mt-10 top-card-cours"></div>
                    <div className=" text-white d-flex flex-column justify-content-center">
                      <h4 className="card-cours-title ">yoga et danse</h4>
                      <div id="data_cours_3" className="hidden-data" >
                        <div className='h-100 background-data'>
                          <div className='text-center mt-6 '>
                            aaaaaaaaaaaaaaaaaaaaaaa
                          </div>
                        </div>
                     
                         
                        
                       
                      </div>

                      <a href="#" className="text-white link-card"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#644A82" fill-opacity="1" d="M0,256L34.3,240C68.6,224,137,192,206,202.7C274.3,213,343,267,411,245.3C480,224,549,128,617,90.7C685.7,53,754,75,823,101.3C891.4,128,960,160,1029,181.3C1097.1,203,1166,213,1234,218.7C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg> {/*
      <div className="row bg-violet mt-">
        <div className="col-12 ">
          <p className="text-white text-center titre-planning">
            Planning du jour
          </p>
        </div>
          <div className="col-lg-2 col-sm-5 spacingCol">
            <CardHomePlanning
              horaire="8h-9h"
              titre="ZUMBA"
              text="Pour enfants de 6-9 ans"
            ></CardHomePlanning>{" "}
          </div>       
      </div>
       
      <div>
        <div className="row justify-content-center mt-4 mb-4  ">
          <h1 className="">Actualité</h1>
        </div>
        <div className="row ">
          <div className="col-md-4 col-sm-12">
            <CardHomeActualite></CardHomeActualite>
          </div>
          <div className="col-md-4 col-sm-12">
            <CardHomeActualite></CardHomeActualite>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <CardHomeActualite></CardHomeActualite>
          </div>
        </div>
        <div className="  float-right">
          <a href=''>Voir toute l'actualité  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
         
        </div>
      </div>
    
      <div>
        <div className="parent">
          <div className="div1">
            <p>1</p>{" "}
          </div>
          <div className="div2">
            <p>2</p>{" "}
          </div>
          <div className="div3">
            <p>3</p>{" "}
          </div>
          <div className="div4">
            <p>4</p>{" "}
          </div>
          <div className="div5">
            <p>5</p>{" "}
          </div>
          <div className="div6">
            <p>6</p>{" "}
          </div>
          <div className="div7">
            <p>7</p>{" "}
          </div>
          <div className="div8">
            <p>8</p>{" "}
          </div>
        </div> 
      </div>*/}
    </>
  );
};

export default Home;
