import React from 'react';
import './Icon.scss';
import  '../../../components/Animations/Animations.scss';


const Icon =({children, img, onClick})=>{
  
    return(
        <div onClick={onClick} className="cellphone-item">
            <div className="img-container jello-vertical">
                <img src={img}/>
            </div>
            <p> {children} </p>
        </div>
    );
}

export default Icon;