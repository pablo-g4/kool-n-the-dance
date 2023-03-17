import PropTypes from 'prop-types'
import React, { Component } from 'react'
import img from "./hiit.png"

export class Card extends Component {
    static propTypes = {}
  
    render() {
      return (
<div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <h2>01</h2>
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
        <h2>02</h2>
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>
    )
}
}

export default Card