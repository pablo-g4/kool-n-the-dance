import React from 'react';
import "./Card.css";
import { News } from '../../Models/News';
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { formatDateDDMMYY } from '../../Utils/utils'
import defaultPic from '../../Assets/Images/nofiles.jpg'


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
        displayDeleteConfirmationModal?: React.EffectCallback,
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

            <div className=" mb-3 article-card  rounded-card-actualite shadow card-police ">
                <div className="d-flex flex-row ">
                    <div className='col-4'>
                        <img className='img-fluid' src={news.imageUrl ? news.imageUrl : defaultPic} alt="photo_article" />
                    </div>
                    <div className="col-8">
                        <h5 className="fs-7 card-text-color">{news.title}</h5>
                        <p className="card-text-description">"{news.description}"</p>
                        {news.attachedFileUrl &&
                            <a href={news.attachedFileUrl} download>
                                <p className='piece-jointe'> Télécharger la pièce jointe </p>
                            </a>
                        }
                        <div>
                            {
                                setIsOpen && <AiFillEdit className="icon" size={25} onClick={() => openEditModal()} />
                            }
                            {
                                displayDeleteConfirmationModal && <AiOutlineClose className="icon" size={25} onClick={openDeleteConfirmationmodal} />
                            }
                        </div>
                        <div className='d-flex justify-content-end'>
                            <p className="card-text-color">{formatDateDDMMYY(news.creationDate*1000)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;