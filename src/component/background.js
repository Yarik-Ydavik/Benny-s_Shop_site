import React, { Component } from 'react'
import "../style/background.scss" 
import back from '../img/background.png'
export default class BACKGROUND extends Component {
  render() {
    return (
        <div className='background'><img src={back} alt='car'/></div>
    )
  }
}
