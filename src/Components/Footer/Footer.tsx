import React from 'react';
import { Carousel } from '@mantine/carousel';
import { SocialIcon } from 'react-social-icons';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
const position = [51.505, -0.09]

const Footer = () => {
    return (
        <div className='footer d-flex'>
            <div className='text-center col-lg-3 col-md-12 col-sm-12'>
                <h1 className='footerH1'>Plan du site</h1>
                <span className='text'>
                    <a href='/' className='text-white'>Accueil</a>
                </span>
                <span className='text'>
                    <a href='/planning' className='text-white'>Planning</a>
                </span>
                <span className='text'>
                    <a href='/cours' className='text-white'>Cours</a>
                </span>
                <span className='text'>
                    <a  href='/galerie' className='text-white'>Galerie</a>
                </span>
                <span className='text'>
                    <a href='/actualite' className='text-white'>Actualté</a>
                </span>
            </div>
            <div className='col-lg-3 text-center col-md-12 col-sm-12'>
                <h1 className='footerH1'>Contact</h1>
                <a href='/' className='text-white'>Accueil</a>
                <a href="mailto:koolnthedance@gmail.com" className='text-white'>koolnthedance@gmail.com</a>
                <span className='text'>9H-21</span>
                <div className='socialIcon'>
                    <SocialIcon network="tiktok" bgColor="#FFFFFF" style={{marginRight: '2%'}} />
                    <SocialIcon network="twitter" bgColor="#FFFFFF" style={{marginRight: '2%'}} />
                    <SocialIcon network="facebook" bgColor="#FFFFFF" style={{marginRight: '2%'}} />
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
            
        </div>

  
  );
};

export default Footer;
