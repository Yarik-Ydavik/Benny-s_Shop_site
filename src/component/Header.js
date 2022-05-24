import React, { Component } from 'react'
import IMAGE from '../img/icon.png'
import BACKGROUND from '../img/background.png'
import '../style/style.scss'
import { Link } from 'react-router-dom'
import { GLAVNAYA, TORGOVI_ZAL, ASSORTIMENT, ADDRES} from '../utils/const'
export default class Header extends Component {
  render() {
    return (
      <div>
          <img class="image-back" src={BACKGROUND}alt='back'/>
        <a><Link to={GLAVNAYA}><img class="image" src={IMAGE} alt='car'/></Link></a>

        <div className='HEAD'>
          <div className='head'> 
            <div className='text1'>
              <a ><Link to={GLAVNAYA}>ГЛАВНАЯ</Link></a>
            </div>
            <div className='text2'>
              <a ><Link to={TORGOVI_ZAL}>ТОРГОВЫЙ ЗАЛ</Link></a>
            </div>
            <div className='text3'>
              <a ><Link to={ASSORTIMENT}>АССОРТИМЕНТ*</Link></a>
            </div>
            <div className='text4'>
              <a ><Link to={ADDRES}>АДРЕС</Link></a>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
