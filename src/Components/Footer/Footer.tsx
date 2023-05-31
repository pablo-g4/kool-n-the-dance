import React, { useState, useEffect } from 'react'
import { Carousel } from '@mantine/carousel'
import { SocialIcon } from 'react-social-icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { GeneralInformations } from '../../Models/GeneralInformations'
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
                    <a href='/galerie' className='text-white'>Galerie</a>
                </span>
                <span className='text'>
                    <a href='/actualite' className='text-white'>Actualités</a>
                </span>
            </div>
            <div className='col-lg-3 text-center col-md-12 col-sm-12'>
                <h1 className='footerH1'>Contact</h1>
                <a href="mailto:koolnthedance@gmail.com" className='text-white'>koolnthedance@gmail.com</a>
                <p className='text'>9h-21h</p>
                <a href='https://www.facebook.com/people/Kool-N-the-dance/100063903799414/' target='blank' className='socialIcon'>
                    <SocialIcon network="facebook" bgColor="#FFFFFF" style={{ marginRight: '2%' }} />
                </a>
            </div>
            <div className="col">
                <div className='map'>
                    <MapContainer
                        center={[48.9982, 1.4983]} // Change the center to the first location
                        zoom={13}
                        scrollWheelZoom={false}
                        className="leaflet-container2"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[48.9982, 1.4983]}>
                            <Popup>
                                20 chemin du virolet 27200 vernon
                            </Popup>
                        </Marker>
                        <Marker position={[48.9936, 1.4633]}>
                            <Popup>
                                Complexe sportif léo lagrange rue barrière 27950 saint marcel
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </div>


    );
};

export default Footer;
