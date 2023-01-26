import React from "react";
import { SocialIcon } from "react-social-icons";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const position = [51.505, -0.09];
const Footer = () => {
<<<<<<< HEAD
  return (
    <div className="footer col-xl-12 col-xs-12">
      <div className="column col-xl-3">
        <h1 className="footerH1">Plan du site</h1>
        <span className="text">
          <a>Accueil</a>
        </span>
        <span className="text">
          <a>Planning</a>
        </span>
        <span className="text">
          <a>Cours</a>
        </span>
        <span className="text">
          <a>Galerie</a>
        </span>
        <span className="text">
          <a>Actualté</a>
        </span>
      </div>
      <div className="column col-xl-3 col-xs-12">
        <h1 className="footerH1">Contact</h1>
        <span className="text">Accueil</span>
        <span className="text">koolnthedance@gmail.com</span>
        <span className="text">9H-21</span>
        <div className="socialIcon">
          <SocialIcon
            network="tiktok"
            bgColor="#FFFFFF"
            style={{ marginRight: "5px" }}
          />
          <SocialIcon
            network="twitter"
            bgColor="#FFFFFF"
            style={{ marginRight: "5px" }}
          />
          <SocialIcon
            network="facebook"
            bgColor="#FFFFFF"
            style={{ marginRight: "5px" }}
          />
=======
    return (
        <div className='footer d-flex'>
            <div className='col-lg-3 col-md-12'>
                <h1 className='footerH1'>Plan du site</h1>
                <span className='text'>
                    <a>Accueil</a>
                </span>
                <span className='text'>
                    <a>Planning</a>
                </span>
                <span className='text'>
                    <a>Cours</a>
                </span>
                <span className='text'>
                    <a>Galerie</a>
                </span>
                <span className='text'>
                    <a>Actualté</a>
                </span>
            </div>
            <div className=' col-lg-3  col-md-12'>
                <h1 className='footerH1'>Contact</h1>
                <span className='text'>Accueil</span>
                <span className='text'>koolnthedance@gmail.com</span>
                <span className='text'>9H-21</span>
                <div className='socialIcon'>
                    <SocialIcon network="tiktok" bgColor="#FFFFFF" style={{marginRight: "5px"}} />
                    <SocialIcon network="twitter" bgColor="#FFFFFF" style={{marginRight: "5px"}} />
                    <SocialIcon network="facebook" bgColor="#FFFFFF" style={{marginRight: "5px"}} />
                </div>
            </div>
            <div className="col">
                <div className='map'>
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="leaflet-container2"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                </div>
            </div>
            
>>>>>>> 6108e628d658b00464071da112654a123f9a8ee9
        </div>
      </div>
      <div className="map col-xl col-xs-12">
        <div className="map">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={15}
            scrollWheelZoom={false}
            className="leaflet-container2"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
