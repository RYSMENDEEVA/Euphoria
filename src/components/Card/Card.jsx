import React from 'react';

const Card = ({ image, title, price, subtitle }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <img className="card__img" src={image} alt="" />
      </div>

      <div className="card__body">
        <div className="card__text">
          <div className="card__title">{title}</div>
          <div className="card__muted">{subtitle}</div>
        </div>
        <div className="card__price">{price}$</div>
      </div>
    </div>
  );
};

export default Card;
