import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import Header from '../component/Header'
import carSTORE from '../store/carSTORE'
import "../style/carousel.scss"
 
const Torgovy_zal = () => {

  const [value, valueChange] = useState(0);
  const [perem, setPerem] = useState(0);
  return (
    <div>
      <Header/>
      <div  className='parent-slider'>
        <img src={carSTORE.projects[value].IMG[perem]}alt=""/>
        <div className="slider">
          <img src={carSTORE.projects[value].checkbox1} alt="" onClick={()=>setPerem(0)}/>

          <img src={carSTORE.projects[value].checkbox2} alt="" onClick={()=>setPerem(1)}/>

          <img src={carSTORE.projects[value].checkbox3} alt="" onClick={()=>setPerem(2)}/>

          <img src={carSTORE.projects[value].checkbox4} alt="" onClick={()=>setPerem(3)}/>
        </div>
      </div>
        <div className='body-torgovy'>
          <div className='word'>
          ПРОЕКТЫ 
          </div>
          <div className='body-torgovy-img'>
              <div className='body-torgovy-img-1' onClick={()=>valueChange(0)}>
                <img src={carSTORE.projects[0].img}/>
              </div>
              <div className='body-torgovy-img-2' onClick={()=>valueChange(1)}>
                <img src={carSTORE.projects[1].img}/>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Torgovy_zal;