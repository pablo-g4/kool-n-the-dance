import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import background_top_image from "../images/Galerie/DAN_0809inv.png";
import "./DAN_0568inv@2x.jpg";
import logo_top from "./Logo@2x.jpg";
import vague from "./Tracé 101@2x.jpg";
import rosas from"./Tracé 230@2x.jpg";

const Home = () => {
  return (
    
    
    <><header>
      <div className="row">
        <div className="col">
        <div className='logo_haut_de_page'>
          <img src={logo_top}  />
        </div>
        </div>
        <div className="col">
          <div className='rosas'>
            <div className="row">
            
              <p className="text_haut col-sm-6 mx-auto">J'ai une thérapie, elle s'appelle "Danse et Fitness !"</p>
            </div>
            <div className="row">
              <p className="text_bas col-sm-6 mx-auto">Je veux...</p>
            </div>
            
              <div className="row">

                <button type="button" className="button_danser col-sm-6 mx-auto" >DANSER</button>
              </div>
              <div className="row">
                
                <button type="button" className="button_fitness col-sm-6 mx-auto ">FAIRE DU FITNESS</button>

              </div>
              
            
            
            
          </div>
        </div>
      </div>
      
        <div className='photo_haut_de_page'>
          <img src={background_top_image} />
        </div>
        
        
        <div className='vague_sous_photo'>
          <img src={vague} />
        </div>
      
    </header>


    <div>
        <div className="parent">
          <div className="div1">
            <p>1</p>{" "}
          </div>
          <div className="div2">
            <p>2</p>{" "}
          </div>
          <div className="div3">
            {" "}
            <p>3</p>
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
      </div></>
  );
};

export default Home;
