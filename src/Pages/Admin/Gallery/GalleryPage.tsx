import React, { useEffect, useState, useCallback } from 'react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { Group } from '@mantine/core'
import { AiOutlineClose } from 'react-icons/ai'
import { GrUploadOption } from 'react-icons/gr'
import CustomSwitch from '../../../Components/Switch/CustomSwitch'
import { getAllFiles } from '../../../Controllers/files'
import { createFile, updateFile } from '../../../Controllers/files'
import ImageViewer from '../../../Components/ImageViewer/ImageViewer'
import "./Gallery.css"


export const GalleryPage = () => {

    const [switchValue, setSwitchValue] = useState(true)
    const [images, setImages] = useState<any>([])
    const [archiveFiles, setArchiveFiles] = useState<any>([])

    const handleSwitch = () => {
        setSwitchValue(!switchValue)
    }

    const onImageChange = async (files: any) => {
        const file = await createFile(files[0], "gallery");
        setImages((oldArray:any) => [...oldArray, file])
    }

    const getArchivedFiles = () => {
        return images.filter((image: any) => {
            return image.isActive === false
        })
    }

    const handleArchiving = async (files: any) => {
        let newFiles: any = []
        setArchiveFiles(archiveFiles.forEach((file:any) => {
            file.isActive = false
            newFiles.push(file)
            return file
        }))
        console.log(archiveFiles)
        await Promise.all([archiveFiles.forEach(async (file: any) => {
            await updateFile(file);    
        })])
        newFiles.map((newFile:any) => {
            images.forEach((image:any) => {
                if (newFile.id === image.id) {
                    return newFile;
                }
                return image;
            })
        })
        setArchiveFiles([]);
        console.log(newFiles)
    }

    useEffect(() => {
        const fetchData = async () => {
            const allFiles = await getAllFiles()
            setImages(allFiles);
        }
        fetchData()
    }, [])

    return (
        <div className='page'>
            <span className='title'> Gestion Galerie </span>
            <div className='d-flex flex-row justify-content-between m-2'>
                <div>
                    <CustomSwitch
                        value={switchValue}
                        setValue={handleSwitch}
                        firstLabel='En ligne'
                        secondLabel='Archives'
                    />
                </div>
                <div className='d-flex align-items-center' >
                    <a 
                        className='button-add-galerie'
                        onClick={() => {
                            handleArchiving(archiveFiles)
                        }}
                    >
                        Archiver la sélection
                    </a>
                </div>
            </div>
            <div>
                {switchValue &&
                    <Dropzone
                        onDrop={(file) => onImageChange(file)}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        className="dropzone-galerie-container"
                    >
                        <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }} className='dropzone-galerie'>
                            <div>
                                <span className='dropzone-text-galerie'>
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
            <div className='d-flex row images-container'>
                {images && switchValue ? images.map((image:any, index: number) =>
                    image.isActive && image.fileUrl && (
                        <div className='col-md-3 col-xs-12 img-fluid'>
                            <ImageViewer
                                key={index}
                                file={image}
                                archiveFiles={archiveFiles}
                                setArchiveFiles={setArchiveFiles}
                            />
                        </div>
                    ))
                : getArchivedFiles().map((image: any, index: number) =>
                !image.isActive && image.fileUrl && (
                    <div className='col-md-3 col-xs-12 img-fluid'>
                        <ImageViewer
                            key={index}
                            file={image}
                            archiveFiles={archiveFiles}
                            setArchiveFiles={setArchiveFiles}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
