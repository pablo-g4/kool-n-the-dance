import React, { useState, useCallback } from 'react';
import Footer from '../../Components/Footer/Footer'
import { Carousel } from '@mantine/carousel';
import carousel1  from '../../Assets/Images/carousel/carousel1.png';
import carousel2  from '../../Assets/Images/carousel/carousel2.png';
import carousel3 from '../../Assets/Images/carousel/carousel3.png';
import carousel4  from '../../Assets/Images/carousel/carousel4.png';
import carousel5  from '../../Assets/Images/carousel/carousel5.png';
import carousel6  from '../../Assets/Images/carousel/carousel6.png';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';




const Galerie = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    
    <div className='body'>
      <div className="titre">Galerie</div>

        <div className='visualiseuse'>

          {images.map((src, index) => (
          <img
            src={ src }
            onClick={ () => openImageViewer(index) }
            width="100"
            key={ index }
            style={{ margin: '2px' }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}

        </div>

        <div className='carou'>
          <Carousel orientation="vertical" loop="true" height={545} maw={320} dragFree slideSize="13.5%" initialSlide={2} >
            <Carousel.Slide>
              <img src={carousel1} height="110.2px" width="180px" ></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel2} height="110.2px" width="180px"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel3}height="110.2px" width="180px"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel4} height="110.2px" width="180px"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel5} height="110.2px" width="180px"></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel6} height="110.2px" width="180px" ></img>
            </Carousel.Slide>
          </Carousel>
        </div>
     </div>    
  )
}

export default Galerie

