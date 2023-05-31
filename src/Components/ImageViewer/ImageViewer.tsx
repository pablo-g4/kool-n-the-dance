import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsSquare } from 'react-icons/bs'
import { BsCheckSquareFill } from 'react-icons/bs'
import "./ImageViewer.css"
import { Files } from '../../Models/Files'
import _ from 'lodash'


const ImageViewer = ({
    file,
    archiveFiles,
    setArchiveFiles,
    setBookmarks,
}: {
    file: Files;
    archiveFiles: Files[];
    setArchiveFiles:React.Dispatch<React.SetStateAction<Files[]>>;
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
        if (!isBookmarked) setBookmarks((previousBookmarks: any) => [...previousBookmarks, file])
        else setBookmarks((previousBookmarks: any) => {
            return  _.filter(previousBookmarks, previousBookmark =>  previousBookmark.id !== file.id )
        })
    }

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
                className='img-fluid img-viewer-gallery '
                src={file.fileUrl}
            />
        </div>
    )
}

export default ImageViewer



