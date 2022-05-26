import React from 'react'
import Header from '../component/Header'
import '../style/style.scss'
import CAR from "./car"

const Assotyment = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  return (
    <div>
        <Header/>
        <div className='body-as'>
          <CAR/>
        </div>
    </div>
  )
}

export default Assotyment
