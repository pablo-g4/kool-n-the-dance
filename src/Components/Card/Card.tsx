import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Image from './../../image/IMG-20220612-WA0098.png';
import "./Card.css";

const position = [51.505, -0.09]
const Card = ({title, description}:{title:string, description:string}) => {
    return (

        <><>
        <div className="card mb-3 article-card ml-5 rounded-card-actualite shadow card-police mx-auto center-article">
            <div className="row g-0">
                <div className='d-sm-block d-md-flex'>
                    <div className="col-md-4 col-xs-11 mr-4" >
                        <img className='w-100 h-100' src={Image} alt="photo_article" />
                    </div>
                    <div className="col-md-7 col-xs-11 d-sm-block d-md-flex ">
                        <div className="card-body">
                            <h5 className="fs-7 card-text-color">{title}</h5>
                            <p className="card-text">"{description}"</p>
                            <p className="card-text float-right text-muted h6">12/01/2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </></>

    )
}

export default Card;