import React, { useEffect, useState, useCallback } from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Group } from '@mantine/core';
import { AiOutlineClose } from 'react-icons/ai';
import { GrUploadOption } from 'react-icons/gr';
import CustomSwitch from '../../../Components/Switch/CustomSwitch';
import "./Gallery.css";
import { getAllFiles } from '../../../Controllers/files';
import { createFile } from '../../../Controllers/files';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { BsSquare } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';


const AdminGallery = () => {

    const [value, setValue] = useState(true);
    const [images, setImages] = useState([]);

    const onImageChange = async (files) => {
        const uploadedImageUrl = await createFile(files[0], "gallery");
        setImages(oldArray => [...oldArray, { fileUrl: uploadedImageUrl, isActive: true }])
    }

    useEffect(() => {
        const fetchData = async () => {
            const allFiles = await getAllFiles()
            setImages(allFiles);
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(images)
    }, [images])

    return (
        <div className='page'>
            <span className='title'> Gestion Galerie </span>
            <div className='d-flex flex-row justify-content-between m-2'>
                <div>
                    <CustomSwitch
                        value={value}
                        setValue={setValue}
                        firstLabel='En ligne'
                        secondLabel='Archives'
                    />
                </div>
                <div className='d-flex align-items-center' >
                    <a className='button-add-galerie'>Archiver la section</a>
                </div>
            </div>
            <div>
                {value &&
                    <Dropzone
                        onDrop={(file) => onImageChange(file)}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        className="dropzone-galerie-container"
                    >
                        <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }} className='dropzone-galerie'>
                            <div>
                                <span size="s" className='dropzone-text-galerie'>
                                    Glisser ici pour ajouter une/des image(s)/vidéo(s) ou
                                </span>
                                <button className='button-dropzone-galerie'>
                                    <span className="dropzone-button-text-galerie">
                                        Importer à partir d'un dossier
                                    </span>
                                    <Dropzone.Idle>
                                        <GrUploadOption
                                            color='white'
                                            size="2rem"
                                            className='upload-icon-galerie'
                                        />
                                    </Dropzone.Idle>
                                </button>
                            </div>
                            <Dropzone.Accept>
                                <GrUploadOption
                                    size="3.2rem"
                                    color="hsl(357, 96%, 60%)"
                                />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <AiOutlineClose
                                    size="3.2rem"
                                />
                            </Dropzone.Reject>
                        </Group>
                    </Dropzone>
                }
            </div>
            <div className='d-flex flex-row images-container'>
                {(images && value) ? images.map((image, index) =>
                    image.isActive && image.fileUrl && (
                        <div className='col-4'>
                            <div className='image-icons-container'>
                                <AiOutlineStar/>
                                <BsSquare/>
                            </div>
                            <img
                                key={index}
                                className='img-gallery'
                                src={image.fileUrl}
                            />
                        </div>

                    )) :
                    images.map((image, index) =>
                        !image.isActive && image.fileUrl && (
                            <div>
                                <img
                                    key={index}
                                    className='img-gallery'
                                    src={image.fileUrl}
                                />
                            </div>

                        ))}
            </div>
        </div>
    )
}

export default AdminGallery



