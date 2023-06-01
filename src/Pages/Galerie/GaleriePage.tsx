import React, { useState, useCallback, useEffect } from 'react'
import { Carousel } from '@mantine/carousel'
import carousel1  from '../../Assets/Images/carousel/carousel6.jpeg'
import carousel2  from '../../Assets/Images/carousel/carousel5.jpeg'
import carousel3 from '../../Assets/Images/carousel/carousel4.jpeg'
import carousel4  from '../../Assets/Images/carousel/carousel3.jpeg'
import carousel5  from '../../Assets/Images/carousel/carousel1.jpeg'
import carousel6  from '../../Assets/Images/carousel/carousel2.jpeg'
import ImageViewer from 'react-simple-image-viewer'

import { getAllFilesFromFolder } from '../../Controllers/files'
import { COLLECTION } from '../../db/collection'
import { FilesVM } from '../../viewModels/FilesVM'
import _ from 'lodash'

export const GaleriePage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [allFiles, setAllFiles] = useState<FilesVM[]>([])


  const filteredImages = [allFiles[activeImageIndex]]
  
  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const getCurrentImageIndex = () => {

    return allFiles[activeImageIndex]
  }

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleSlideChange = (index: any) => {
    console.log(index);
    setActiveImageIndex(index)
  }

  const fetchFiles = async () => {
    const files = await getAllFilesFromFolder(COLLECTION.GALLERY)
    let filesVM = _.map(files, file =>  FilesVM.fromFiles(file))
    setAllFiles(_.filter(filesVM, ['isVideo', false]))
  }

  useEffect(() => {
    fetchFiles()
  }, [])
  

  return (
    <div className='body'>
      <div className="titre-galerie">
        <p className='text-galerie'>
          Galerie
        </p>   
      </div>
      <div className='container main-carou'>
        {

        }
      <div className='visualiseuse'>
          {allFiles.length && filteredImages.map((src, index) => (
            <img
              src={src.fileUrl}
              onClick={ () => openImageViewer(index) }
              key={ index }
              style={{ margin: '2px', width: '800px' }}
              alt=""
              className="img-galerie"
            />
          ))}
    
          {isViewerOpen && (
            <ImageViewer
              src={ _.map(allFiles, fileVM => (fileVM.fileUrl)) }
              currentIndex={ activeImageIndex }
              disableScroll={ false }
              closeOnClickOutside={ true }
              onClose={ closeImageViewer }
            />
          )} 
        </div>

        <div className='carou' style={{margin: "auto"}}  >
          <Carousel orientation="vertical" loop={true} height={545} className='realCarou' onSlideChange={(index) => handleSlideChange(index)} maw={320} dragFree slideSize="13.5%" initialSlide={2} >

            {
              _.map(allFiles, fileVM => (
                <Carousel.Slide>
                  <img src={fileVM.fileUrl} height="110.2px" width="180px" className="img-galerie" ></img>
                </Carousel.Slide>
              ))
            }


          </Carousel>
        </div>

      </div>
      <span className='m-bottom'></span>
     </div>    
  )
}

