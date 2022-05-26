import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import GLAVNAYA_PAGE from "../img/GLAVNAYA_page1.png"
import GLAVNAYA_PAGE2 from "../img/GLAVNAYA_page2.png"
import GLAVNAYA_PAGE3 from "../img/GLAVNAYA_page3.png"
import GLAVNAYA_PAGE4 from "../img/GLAVNAYA_page4.png"
import "../style/GLAvnaya_page.scss"

const homePAGE = observer(() => {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      
      <div className='parentGLAVNAYA'>
        <img src={GLAVNAYA_PAGE} />
        <div className='podglavnaya'>
          <div className='block1-glav'>
            <div className='block1' onClick={()=>navigate('/torgovi_zal')}>
              <div className='block1_1'>ТОРГОВЫЙ ЗАЛ</div>
              <div className='block1_1_1'>></div>
            </div>
            <div className='block1'>Наши предыдущие проекты</div>
          </div>
          <div className='block2'>
            <img src={GLAVNAYA_PAGE4} />
          </div>
          <div className='block3-glav'>
            <div className='block3' onClick={()=>navigate('/adres')}>
              <div className='block3_3'>АДРЕС</div>
              <div className='block3_3_3'>></div>
            </div>
            Мы располагаемся в южном Лос-Сантосе, на Альта-стрит
          </div>
        </div>
        <div className='podglavnaya'>
          <div className='block4'>
            <img src={GLAVNAYA_PAGE3} />
          </div>
          <div className='block5-glav'>
            <div className='block5' onClick={()=>navigate('/assortiment')}>
              <div className='block5_5'>АССОРТИМЕНТ</div>
              <div className='block5_5_5'>></div>
            </div>
            Найдите потрёпанное сирийное ТС своей мечты. Весь транспорт из нашего ассортимента можно модифицировать в Benny's Original Motor Works.
          </div>
          <div className='block6'>
            <img src={GLAVNAYA_PAGE2} />
          </div>
        </div>
      </div>
    </div>
  )
})

export default homePAGE