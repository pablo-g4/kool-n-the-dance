import React, { Component } from 'react'
import img from "./test.png"
import './Header_cours.css'


export class header_cours extends Component {
  render() {
        return (    
            <>
                <div className='text'>
                    <p>Danses</p>
                </div>
                
                <div className='divimg1'>
                    <img className='image1' src={img} />
                </div>
            </>

        )
    }
}

export default header_cours