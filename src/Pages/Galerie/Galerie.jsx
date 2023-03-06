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
      items: [1,2,3,4,5]
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

  renderThumbs = () =>
    <ul>{this.state.items.map((item, i) =>
      <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
    </ul>;

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
        <h3>Navigation</h3>
        { this.renderThumbs() }
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button>
        <h3>React Alice Carousel</h3>
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


