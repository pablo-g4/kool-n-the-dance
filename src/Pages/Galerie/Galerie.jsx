import React from 'react'
import Footer from '../../Components/Footer/Footer'

import Image1 from '../../images/Galerie/DAN_0568inv.png'
import Image2 from '../../images/Galerie/DAN_0616inv-1.png'
import Image3 from '../../images/Galerie/DAN_0809inv.png'
import Image4 from '../../images/Galerie/DAN_1169inv.png'
import Image5 from '../../images/Galerie/DAN_1465inv.png'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



class Galerie extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [
        <img src={Image1}></img>,
        <img src={Image2}></img>,
        <img src={Image3}></img>,
        <img src={Image4}></img>,
        <img src={Image5}></img>,
      ]
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });


  renderGallery() {
    const { currentIndex, items } = this.state;

    return (<AliceCarousel
      dotsDisabled={true}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={this.onSlideChanged}
    >
      { items.map((item, i) => <div key={i} className="yours-custom-class"><h2>{ item }</h2></div>) }
    </AliceCarousel>);
  }

  render() {
    return (
      <div>

        { this.renderGallery() }
      </div>
    );
  }
}

/** 
 * 
 * const Galerie = () => {

  
  return (
    
    <div className='body'>
      <div className="titre">Galerie</div>


   


    </div>    
  )
}
 */
export default Galerie  


