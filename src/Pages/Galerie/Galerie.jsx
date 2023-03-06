import React from 'react'
import Footer from '../../Components/Footer/Footer'

import Image1 from '../../images/Galerie/DAN_0568inv.png'
import Image2 from '../../images/Galerie/DAN_0616inv-1.png'
import Image3 from '../../images/Galerie/DAN_0809inv.png'
import Image4 from '../../images/Galerie/DAN_1169inv.png'
import Image5 from '../../images/Galerie/DAN_1465inv.png'


const Galerie = () => {
  return (
    <div className='body'>
      <div className="titre">Galerie</div>

      <div id="scene">
        <div id="left-zone">
          <ul class="list">
            <li class="item">
              <input type="radio" id="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)" name="basic_carousel" value="The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)" checked="checked"/>
              <label class="label_strawberry" for="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)">strawberry</label>
              <div class="content content_strawberry"><span class="picto"></span>
                <h1>strawberry</h1>
                <p>The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)</p>
              </div>
            </li>
            <li class="item">
              <input type="radio" id="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa." name="basic_carousel" value="A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."/>
              <label class="label_banana" for="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.">banana</label>
              <div class="content content_banana"><span class="picto"></span>
                <h1>banana</h1>
                <p>A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
              </div>
            </li>
            <li class="item">
              <input type="radio" id="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus." name="basic_carousel" value="The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."/>
              <label class="label_apple" for="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.">apple</label>
              <div class="content content_apple"><span class="picto"></span>
                <h1>apple</h1>
                <p>The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.</p>
              </div>
            </li>
            <li class="item">
              <input type="radio" id="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae." name="basic_carousel" value="The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."/>
              <label class="label_orange" for="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.">orange</label>
              <div class="content content_orange"><span class="picto"></span>
                <h1>orange</h1>
                <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div>
    </div>    
  )
}

export default Galerie
