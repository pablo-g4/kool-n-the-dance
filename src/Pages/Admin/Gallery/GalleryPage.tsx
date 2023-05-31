import React, { useEffect, useState, useCallback } from 'react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { Group } from '@mantine/core'
import { AiOutlineClose } from 'react-icons/ai'
import { GrUploadOption } from 'react-icons/gr'
import CustomSwitch from '../../../Components/Switch/CustomSwitch'
import { getAllFilesEvenDisabled } from '../../../Controllers/files'
import { createFile, updateFile } from '../../../Controllers/files'
import ImageViewer from '../../../Components/ImageViewer/ImageViewer'
import { COLLECTION } from '../../../db/collection'
import { FilesVM } from '../../../viewModels/FilesVM'
import { createBookmark, deleteBookmark, getAllBookmarks, updateBookmark } from '../../../Controllers/bookmark'
import { Select } from '@mantine/core'
import _, { find } from 'lodash'
import "./Gallery.css"
import { Bookmark } from '../../../Models/Bookmark'


export const GalleryPage = () => {

    const [switchValue, setSwitchValue] = useState(true)
    const [images, setImages] = useState<FilesVM[]>([])
    const [archiveFiles, setArchiveFiles] = useState<FilesVM[]>([])
    const [filesToBookmark, setFilesToBookmark] = useState<FilesVM[]>([])
    const [allBookmarks, setAllBookmarks] = useState<Bookmark[]>([])

    const handleSwitch = () => setSwitchValue(!switchValue) 

    const onImageChange = async (files: any) => {
        let newFileVM = new FilesVM()
        newFileVM.id = await createFile(files[0], COLLECTION.GALLERY)
        newFileVM.fileUrl = URL.createObjectURL(files[0])
        setImages([...images, newFileVM])
    }

    const getArchivedFiles = () =>  _.filter(images, (image: any) => { return image.isActive === false })

    const handleArchiving = async (files: any) => {
        let newFilesVM: FilesVM[] = []
        setArchiveFiles(_.forEach(archiveFiles, (file) => {
            file.isActive = false
            newFilesVM.push(file)
            return file
        }))

        for (const fileVM of archiveFiles) {
            if(fileVM.bookmark.id) {
                setAllBookmarks(_.filter(allBookmarks, bookmark => bookmark.id !== fileVM.bookmark.id))
                setFilesToBookmark(_.filter(filesToBookmark, fileToBookmark => fileToBookmark.id !== fileVM.id ))
                await deleteBookmark(fileVM.bookmark.id)
            }
            await updateFile(fileVM.toFiles())   
        }

        _.map(newFilesVM, newFile => {
            _.forEach(images, image => {
                if (newFile.id === image.id) return newFile;
                return image;
            })
        })

        setArchiveFiles([])
    }

    const getBookmarkOrdersOptions = () => {
        return _.map(_.range(1,11), (val) => ({
            label: `${val}`,
            value: `${val}`
        }))
    }

    const saveBookmarks = async () => {
        const bookmarks = _.map(filesToBookmark, (fileVM) => (fileVM.bookmark))
        for (const bookmark of bookmarks) {
                if (bookmark.id) await updateBookmark(bookmark)
                else bookmark.id = await createBookmark(bookmark)
        }

        const bookmarksToDelete = _.difference(allBookmarks , bookmarks)

        for (const bookmarkToDelete of bookmarksToDelete) {
            await deleteBookmark(bookmarkToDelete.id)
        }
    }

    const hasUniqueOrders = () => {
        const orders = _.map(filesToBookmark, fileToBookmark => (fileToBookmark.bookmark.order))        
        const uniqOrders = _.uniq(orders)
        return orders.length !== uniqOrders.length
    }

    useEffect(() => {
        const fetchData = async () => {
            const allCurrentBookmarks = await getAllBookmarks()
            setAllBookmarks(allCurrentBookmarks)
            const allCurrentFiles = await getAllFilesEvenDisabled()
            let allCurrentFilesVM = _.map(allCurrentFiles, currentFiles => FilesVM.fromFiles(currentFiles))
            if(allCurrentFilesVM.length) {
                _.map(allCurrentFilesVM, currentFileVM => {
                    const foundedBookmark = _.find(allCurrentBookmarks, bookmark => bookmark.bookmarkdId ===  currentFileVM.id )
                    if (foundedBookmark) currentFileVM.bookmark = foundedBookmark
                })
            }
            const allFilesVM = _.filter(allCurrentFilesVM, ['associatedCollection', COLLECTION.GALLERY])
            let filesBookmarked: FilesVM[] = [] 
            _.filter(allFilesVM, fileVMItem =>  {
                if (fileVMItem.bookmark.id) filesBookmarked.push(fileVMItem) 
            })
            if(filesBookmarked) setFilesToBookmark(filesBookmarked)            
            setImages(allFilesVM);
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
                        maxSize={10 * 1024 ** 5}
                        accept={{
                            'image/*': [],
                            'video/mp4': []
                        }}
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
                {images && switchValue ? _.map(images, (image, index) =>
                    image.isActive && image.fileUrl && 
                        <div key={index} className='col-md-3 col-xs-12 img-fluid'>
                            <ImageViewer
                                file={image}
                                archiveFiles={archiveFiles}
                                setArchiveFiles={setArchiveFiles}
                                setBookmarks={setFilesToBookmark}
                            />
                        </div>
                    )
                : _.map(getArchivedFiles(), (image, index) =>
                !image.isActive && image.fileUrl && (
                    <div key={index} className='col-md-3 col-xs-12 img-fluid'>
                        <ImageViewer
                            file={image}
                            archiveFiles={archiveFiles}
                            setArchiveFiles={setArchiveFiles}
                        />
                    </div>
                ))
                }
            </div>
            {
                filesToBookmark.length > 0 &&
                (
                    <div className='mt-2'>
                        <h2>Mettre en avant Image/Vidéo sur la page d'accueil</h2>
                        <h4>{filesToBookmark.length} sur 10 images</h4>
                        <div className="row">
                            {
                                _.map(filesToBookmark, (file, index) =>
                                (
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" key={index}>
                                        <div style={{
                                            position: 'relative'
                                        }}> 
                                            {
                                                file.isVideo ? (
                                                    <div>
                                                        <video className='img-fluid img-viewer-gallery' id={file.fileName} controls>
                                                            <source src={file.fileUrl} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                ) : (
                                                    <img style={{
                                                        display: 'block'
                                                    }} className='w-100 shadow-1-strong mb-4' src={file.fileUrl} alt={file.fileName} />
                                                )
                                            }

                                            <Select 
                                                style={{
                                                    position: 'absolute', 
                                                    top:0, 
                                                    right:0,
                                                }}
                                                value={file.bookmark.order}
                                                onChange={(val) => setFilesToBookmark(_.map(filesToBookmark, (bookmarkItem) => {
                                                    if(bookmarkItem.id === file.id ) {
                                                        if(val) bookmarkItem.bookmark.order = val
                                                        return bookmarkItem
                                                    } 
                                                    return bookmarkItem
                                                }) )}
                                                allowDeselect={false}
                                                data={getBookmarkOrdersOptions()}
                                            />
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                        {
                            hasUniqueOrders() && (
                                <p className='text-red'>Deux ou plusieurs images ont le même ordre*</p>
                            )
                        }
                        <div className='buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
                            <button onClick={() => setFilesToBookmark([])}  type="button" value='Annuler' className='btnNoir'>Annuler</button>
                            <button onClick={saveBookmarks} disabled={hasUniqueOrders()} type="submit" value='Valider' className='btnRouge'>Sauvegarder</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
