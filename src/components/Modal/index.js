import React from 'react';
import './style.css';
import cart_img from './../../images/cart-empty.png';
import poke_thanks from './../../images/thanks-poke.png';

export default function Modal(isClear){
  if(isClear.show){
      return(
        <div className='modal'>
          <img src={cart_img} />
        </div>  
      );
  }else {
    return(
      <div className='modal'>
        <img src={poke_thanks} />
        <h1 className='poke_thanks'>Agradecemos pela compra! </h1>
      </div>  
    );
  }
  
}