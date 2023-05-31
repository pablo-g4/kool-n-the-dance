import React from 'react'
import defaultPic from '../../Assets/Images/nofiles.jpg'
import { NewsVM } from '../../viewModels/NewsVM';
import "./Card.css"



const Card = (
    {
        newsVM,
        children
    } :
    {
        newsVM: NewsVM,
        children?: any
    }) => {

    return (
        <>
            <div className=" mb-3 article-card  rounded-card-actualite shadow card-police ">
                <div className="d-flex flex-row ">
                    <div className='col-4'>
                        <img className='img-fluid' src={newsVM.imageFile ? newsVM.imageFile.fileUrl : defaultPic} alt="photo_article" />
                    </div>
                    <div className="col-8">
                        <h5 className="fs-7 card-text-color">{newsVM.title}</h5>
                        <p className="card-text-description">"{newsVM.description}"</p>
                        {newsVM.attachedFile.fileUrl &&
                            <a href={newsVM.attachedFile.fileUrl} target="_blank" download={newsVM.attachedFile.fileName}>
                                <p className='piece-jointe'> Télécharger la pièce jointe </p>
                            </a>
                        }
                        {
                            children
                        }
                        <div className='d-flex justify-content-end'>
                            <p className="card-text-color">{newsVM.displayableCreationDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;