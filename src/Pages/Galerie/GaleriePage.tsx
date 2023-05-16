import React, { useState, useCallback } from 'react'
import { Carousel } from '@mantine/carousel'
import carousel1  from '../../Assets/Images/carousel/carousel6.jpeg'
import carousel2  from '../../Assets/Images/carousel/carousel5.jpeg'
import carousel3 from '../../Assets/Images/carousel/carousel4.jpeg'
import carousel4  from '../../Assets/Images/carousel/carousel3.jpeg'
import carousel5  from '../../Assets/Images/carousel/carousel1.jpeg'
import carousel6  from '../../Assets/Images/carousel/carousel2.jpeg'
import ImageViewer from 'react-simple-image-viewer'

export const GaleriePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  const filteredImages = [images[activeImageIndex]]
  
  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleSlideChange = (index: any) => {
    console.log(index);
    setActiveImageIndex(index)
  }

  return (
    <div className='body'>
      <div className="titre-galerie">
        <p className='text-galerie'>
          Galerie
        </p>   
      </div>
      <div className='container main-carou'>
      <div className='visualiseuse'>
          {filteredImages.map((src, index) => (
            <img
              src={ src }
              onClick={ () => openImageViewer(index) }
              key={ index }
              style={{ margin: '2px', width: '800px' }}
              alt=""
              className="img-galerie"
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={ images }
              currentIndex={ activeImageIndex }
              disableScroll={ false }
              closeOnClickOutside={ true }
              onClose={ closeImageViewer }
            />
          )} 
        </div>

        <div className='carou' style={{margin: "auto"}}  >
          <Carousel orientation="vertical" loop={true} height={545} className='realCarou' onSlideChange={ (index) => handleSlideChange(index)} maw={320} dragFree slideSize="13.5%" initialSlide={2} >
            <Carousel.Slide>
              <img src={carousel1} height="110.2px" width="180px" className="img-galerie" ></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel2} height="110.2px" width="180px" className="img-galerie"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel3}height="110.2px" width="180px" className="img-galerie"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel4} height="110.2px" width="180px" className="img-galerie"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel5} height="110.2px" width="180px" className="img-galerie"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel6} height="110.2px" width="180px" className="img-galerie" ></img>
            </Carousel.Slide>
          </Carousel>
        </div>

      </div>
      <span className='m-bottom'></span>
     </div>    
  )
}
