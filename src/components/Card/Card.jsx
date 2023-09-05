import React from "react";
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from "react-router-dom";

const Card = ({image,title,price, subtitle}) => {
    return ( 
        <div className="card">
                <button className="card__icon"><AiOutlineHeart/></button>
                <div className="wrapper">
                    
                        <img className="card__img" 
                        src={image} alt="" />
                                           
                </div>
               
            <div className="card__body">
                    <div className="card__text">
                        <div className="card__title">
                           {title}
                        </div>
                        <div className="card__muted">
                            {subtitle}
                        </div>
                    </div>
                <div className="card__price">
                   {price}$
                </div>
            </div>
        </div> 
     );
}
 
export default Card;