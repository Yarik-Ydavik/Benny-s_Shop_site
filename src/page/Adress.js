import React from 'react'
import Header from '../component/Header'
import adr from '../img/adresss.png'
const Adress = () => {
  return (
    <div>
      <Header/>
      <div className='adr-button'><a><button>ПОСТАВИТЬ ТОЧКУ</button></a></div>
      <div className='adr-fo'><img src={adr}></img></div>
      
    </div>
  )
}

export default Adress