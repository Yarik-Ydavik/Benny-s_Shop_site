import React from 'react'
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../component/Header';
import CarSTORE from '../store/carSTORE';
import FullS from '../img/FullSTAR.jpg';
import EmptyS from '../img/EmptyS.jpg';
import li1 from "../img/li1.jpg";
import li2 from "../img/li2.jpg";
import li3 from "../img/li3.jpg";
import li4 from "../img/li4.jpg";
import li5 from "../img/li5.jpg";
import li6 from "../img/li6.jpg";
import li7 from "../img/li7.jpg";
import li8 from "../img/li8.jpg";

import { observer } from 'mobx-react-lite';
const carINFO = observer(() => {
  function Home(){
    const params = useParams();
    return params.id
  }
  const number = Home() -1;
  const numb = Home() ;
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className='body-as_carINFO'>
        <div className='parent_carINFO'>
          <div className='children_carINFO'>
              <div><img src={CarSTORE.car[number].GlavImg}/></div>
              <div className='mashine-name'>{CarSTORE.car[number].carName}</div>
              <div className='mashine-price'>{CarSTORE.car[number].Price}</div>
          </div>
          <div className='ru'>
            <div className='children_carINFO2'>
              <hr/>
              <p>ВЫБРАТЬ ИЗ ДОСТУПНЫХ ЦВЕТОВ</p>
              <ul >
                <li ><img src={li1}/></li>
                <li ><img src={li2}/></li>
                <li ><img src={li3}/></li>
                <li ><img src={li4}/></li>
                <li ><img src={li5}/></li>
                <li ><img src={li6}/></li>
                <li ><img src={li7}/></li>
                <li ><img src={li8}/></li>
              </ul>
              <div className='children_carINFO3' onClick={()=>navigate("/car"+"/"+numb+"/sales") }>
                <div className='mashine-price3'>КУПИТЬ ЗА : </div>
                <div className='q'> {CarSTORE.car[number].Price}</div>
                <div className='mashine-price3'> > </div>
              </div>
              <hr/>
              <div className='children_carINFO_opisanye'>
                {CarSTORE.car[number].opisanie2}
              </div>
              
            </div>  
            <div className='children_carINFO1'>
              {CarSTORE.car[number].opisanie1}
              <div className='XARAKTERISTIKI'>
                <div className='XARAKTERISTIKI-item'>
                  <div className='XARAKTERISTIKI-item-s' >СКОРОСТЬ</div>
                  <div className='XARAKTERISTIKI-item-s'>
                  <Rating
                    fractions={4}
                    placeholderRating={CarSTORE.car[number].speed}
                    emptySymbol={<img src={EmptyS}/>}
                    fullSymbol={<img src={FullS}/>}
                    placeholderSymbol= {<img src={FullS}/>}
                  />
                  </div>
                  
                </div>
                <div className='XARAKTERISTIKI-item'>
                  <div className='XARAKTERISTIKI-item-s' >УСКОРЕНИЕ</div>
                  <div className='XARAKTERISTIKI-item-s'>
                  <Rating
                    fractions={4}
                    placeholderRating={CarSTORE.car[number].nitro}
                    emptySymbol={<img src={EmptyS}/>}
                    fullSymbol={<img src={FullS}/>}
                    placeholderSymbol= {<img src={FullS}/>}
                  />
                  </div>
                  
                </div>
                <div className='XARAKTERISTIKI-item'>
                  <div className='XARAKTERISTIKI-item-s' >ТОРМОЖЕНИЕ</div>
                  <div className='XARAKTERISTIKI-item-s'>
                  <Rating
                    fractions={4}
                    placeholderRating={CarSTORE.car[number].tormoz}
                    emptySymbol={<img src={EmptyS}/>}
                    fullSymbol={<img src={FullS}/>}
                    placeholderSymbol= {<img src={FullS}/>}
                  />
                  </div>
                  
                </div>
                <div className='XARAKTERISTIKI-item'>
                  <div className='XARAKTERISTIKI-item-s' >УПРАВЛЕНИЕ</div>
                  <div className='XARAKTERISTIKI-item-s'>
                  <Rating
                    fractions={4}
                    placeholderRating={CarSTORE.car[number].managment}
                    emptySymbol={<img src={EmptyS}/>}
                    fullSymbol={<img src={FullS}/>}
                    placeholderSymbol= {<img src={FullS}/>}
                  />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
          
          
          
        </div>
      </div>
      
      
    </div>
  )
})

export default carINFO