import React from 'react'
import './CardCours.css'
import backgroundImageUrl from "../../Assets/Images/Galerie/DAN_0809inv@2x.png"
import { CoursVM } from '../../viewModels/CoursVM'

export const CardCours = ({ coursVM, children } : {coursVM ?: CoursVM, children: any}) => {
    return (
        <>
            <div style={{
                color: 'white',
                backgroundColor: '#644A82',
                borderRadius: '20px',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                {
                    children
                }
                <p style={{
                    textAlign: 'left',
                    fontSize: '24px',
                    padding: '20px 15px 0 15px',
                    marginBottom: '0',
                    fontWeight: 'bold'
                }}>{coursVM?.title}</p>
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130, 0.75), rgba(100, 74, 130, 1)),url(${coursVM?.imageFile.fileUrl ?? backgroundImageUrl})`,
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px'
                }} id="imgCours">
                    <p className='p-4'>
                        {coursVM?.description}
                    </p>
                </div>
            </div>
        </>
    )
}