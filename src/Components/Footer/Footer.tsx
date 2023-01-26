import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
const position = [51.505, -0.09]
const Footer = () => {
    return (
        <div className='footer'>
            <div className='column'>
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
            <div className='column'>
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
            <div style={{}}>
            <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
    </MapContainer>
            </div>
            
        </div>
    )
}

export default Footer;