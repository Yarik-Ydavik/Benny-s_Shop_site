import { observer } from 'mobx-react-lite'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../component/Header';
import carSTORE from '../store/carSTORE';

const Saless = observer(() => {
    let location = useParams();
    let num = location.id - 1
  return (
    <div>
        <Header/>
      <div className='body-as_carINFO'>
        <div className='parent_carINFO'>
          <div className='children_carINFO'>
              <div><img src={carSTORE.car[num].GlavImg}/></div>
              <div className='mashine-name'>{carSTORE.car[num].carName}</div>
              <div className='mashine-price'>ПРОДАНО</div>
          </div>
          <div className='ru'>
            <div className='children_carINFO2'>
              <div className='children_carINFO_SALES'>
              Спасибо, что воспользовались услугами Benny's Original Motor Works! Мы надеемся, вы останетесь довольны покупкой. Доставку автомобиля мы берем на себя. Мы свяжемся с вами, чтобы подтвердить получение.
              </div>
              
            </div>  
            <div className='children_carINFO1'>
              
            </div>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  )
})

export default Saless