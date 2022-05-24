import React, { Component } from 'react'
import "../style/car.scss"
import { observer } from 'mobx-react-lite';
import carSTORE from '../store/carSTORE';
import { useNavigate} from 'react-router-dom';

const car = observer(() => {
    const navigate = useNavigate();
    return (
        <div class="parent">
            <div className='cars'>
            {carSTORE.car.map (caR =>
                <div className='car' key={caR.id} onClick={()=>navigate("/car"+"/"+caR.id )} >
                    <img src={caR.img}/>
                    <div className='INFO'>
                        <div className='name'>{caR.carName}</div>
                        <div className='Price'>{caR.Price}</div>
                    </div>
                    
                </div>
            )} 
            </div> 
        </div>
    )
  })
  export default car

