import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Image from './../../image/IMG-20220612-WA0098.png';
const position = [51.505, -0.09]
const Card = () => {
    return (

        <><><div className="card mb-3 article-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Image} alt="photo_article" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">TITRE ARTICLE</h5>
                        <p className="card-text">" Camille est une coach sportive dynamique qui donne l'envie de nous surpasser. Elle est géniale, la musique sur laquelle on danse est super. A la fin du cours on a la pêche. Tout est là pour donner envie d'y aller et de se bouger, l'équipe est sympa. Je la conseille à 2000 %. "</p>
                        <p className="card-text"><small className="text-muted">12/01/2023</small></p>
                    </div>
                </div>
            </div>
        </div><div className="card mb-3 article-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Image} alt="photo_article" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">TITRE ARTICLE</h5>
                            <p className="card-text">" Camille est une coach sportive dynamique qui donne l'envie de nous surpasser. Elle est géniale, la musique sur laquelle on danse est super. A la fin du cours on a la pêche. Tout est là pour donner envie d'y aller et de se bouger, l'équipe est sympa. Je la conseille à 2000 %. "</p>
                            <p className="card-text"><small className="text-muted">12/01/2023</small></p>
                        </div>
                    </div>
                </div>
            </div></><div className="card mb-3 article-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Image} alt="photo_article" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">TITRE ARTICLE</h5>
                            <p className="card-text">" Camille est une coach sportive dynamique qui donne l'envie de nous surpasser. Elle est géniale, la musique sur laquelle on danse est super. A la fin du cours on a la pêche. Tout est là pour donner envie d'y aller et de se bouger, l'équipe est sympa. Je la conseille à 2000 %. "</p>
                            <p className="card-text"><small className="text-muted">12/01/2023</small></p>
                        </div>
                    </div>
                </div>
            </div><div className="card mb-3 article-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Image} alt="photo_article" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">TITRE ARTICLE</h5>
                            <p className="card-text">" Camille est une coach sportive dynamique qui donne l'envie de nous surpasser. Elle est géniale, la musique sur laquelle on danse est super. A la fin du cours on a la pêche. Tout est là pour donner envie d'y aller et de se bouger, l'équipe est sympa. Je la conseille à 2000 %. "</p>
                            <p className="card-text"><small className="text-muted">12/01/2023</small></p>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default Card;