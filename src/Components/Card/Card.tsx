import React from 'react';
import { SocialIcon,  } from 'react-social-icons';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Image from './../../image/IMG-20220612-WA0098.png';
import "./Card.css";
import { News } from '../../Models/News';
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import AddOrEditNewsModal from '../News/AddOrEditNewsModal';
import { formatDateDDMMYY } from '../../Utils/utils'
import  defaultPic from '../../Assets/Images/courmacuck.jpg'


const position = [51.505, -0.09]

const Card = (
    {
        news, 
        setIsOpen, 
        setCurrentNews,
        displayDeleteConfirmationModal
    } :
    {
        news: News, 
        setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
        setCurrentNews?: React.Dispatch<React.SetStateAction<News | undefined>>,
        displayDeleteConfirmationModal?:  React.EffectCallback,
    }) => {

        const openEditModal = () => {
            setCurrentNews && setCurrentNews(news)
            setIsOpen && setIsOpen(true)
        }

        const openDeleteConfirmationmodal = () => {
            setCurrentNews && setCurrentNews(news)
            displayDeleteConfirmationModal && displayDeleteConfirmationModal()
        }

    return (
        <>
            <div className="card-custom mb-3 article-card ml-5 rounded-card-actualite shadow card-police ">
                <div className="d-flex flex-row">
                    <div className='card-image-div'>
                        <img className='card-image' src={news.attachedFileUrl ? news.attachedFileUrl : defaultPic} alt="photo_article" />
                    </div>
                    <div className="pr-2 d-flex flex-row flex-fill flex-column">
                        <div className='d-sm-block d-md-flex flex-fill d-flex justify-content-between'>
                            <div className="card-body">
                                <h5 className="fs-7 card-text-color">{news.title}</h5>
                                <p className="card-text-description">"{news.description}"</p>
                            </div>
                            <div>
                                {
                                    setIsOpen && <AiFillEdit className="icon" size={25} onClick={() => openEditModal()} />
                                }
                                {
                                    displayDeleteConfirmationModal && <AiOutlineClose className="icon" size={25} onClick={openDeleteConfirmationmodal} />
                                }
                                
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <p className="card-text-color">{ formatDateDDMMYY(news.creationDate) }</p>
                        </div>
                    </div>
                </div>
            </div>     
      </>
    )
}

export default Card;