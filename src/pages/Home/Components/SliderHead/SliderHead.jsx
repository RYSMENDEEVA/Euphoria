import React from 'react';
import { useNavigate } from 'react-router-dom';
const SliderHead = props => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="slider__card"
        style={{ background: `url(${props.img}) center/cover no-repeat` }}
      >
        <p className="slider__card-category">T-shirt / Tops</p>
        <h2 className="slider__card-title">
          Summer <br /> Value Pack
        </h2>
        <p className="slider__card-pluses">cool / colorful / comfy</p>
        <button className="slider__card-btn" onClick={() => navigate('/women')}>
          Shop Now
        </button>
      </div>
    </>
  );
};

export default SliderHead;
