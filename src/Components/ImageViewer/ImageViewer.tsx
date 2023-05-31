import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BsCheckSquareFill, BsSquare } from 'react-icons/bs'
import "./ImageViewer.css"
import { Files } from '../../Models/Files'
import _ from 'lodash'
import { FilesVM } from '../../viewModels/FilesVM'


const ImageViewer = ({
    file,
    archiveFiles,
    setArchiveFiles,
    setBookmarks,
}: {
    file: FilesVM;
    archiveFiles: FilesVM[];
    setArchiveFiles:React.Dispatch<React.SetStateAction<FilesVM[]>>;
    setBookmarks?: any
}) => {

    const [isArchivedCheck, setIsArchivedCheck] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleCheck = () => {
        setIsArchivedCheck(true)
        setArchiveFiles(oldArray => [...oldArray, file])  
    }

    const handleUncheck = () => {
        setIsArchivedCheck(false)
        setArchiveFiles(_.filter(archiveFiles, archiveFile =>  archiveFile.id !== file.id ))
    }

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked)
        if (!isBookmarked) {
            file.bookmark.bookmarkdId = file.id
            setBookmarks((previousBookmarks: any) => [...previousBookmarks, file])
        } 
        else setBookmarks((previousBookmarks: any) => {
            return  _.filter(previousBookmarks, previousBookmark =>  previousBookmark.id !== file.id )
        })
    }

    useEffect(() => {
        if(file.bookmark.id) setIsBookmarked(true)
    }, [])
    

    return (
        <div className='col-md-12 col-xs-12 '>
            <div className='d-flex flex-row image-icons-container'>
                {setBookmarks && (
                    isBookmarked ?
                        <AiFillStar
                            onClick={handleBookmark}
                            size={20}
                            className='image-icons'
                            color="#F7B801"
                        />
                        :
                        <AiOutlineStar
                            onClick={handleBookmark}
                            size={20}
                            className='image-icons'
                            color="#F7B801"
                        />
                )

                }

                {!isArchivedCheck ?
                    <BsSquare
                        size={20}
                        className='image-icons'
                        color="#644A82"
                        onClick={() => handleCheck()}
                    />
                    :
                    <BsCheckSquareFill
                        size={20}
                        className='image-icons'
                        color="#644A82"
                        onClick={() => handleUncheck()}
                    />
                }
            </div>
            <img
                className='img-fluid img-viewer-gallery'
                src={file.fileUrl}
            />
        </div>
    )
}

export default ImageViewer



