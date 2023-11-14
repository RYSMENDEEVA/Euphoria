import React from 'react';
import arrowImg from './../../../../assets/arrow.png';

const Categories = props => {
  // const navigate = useNavigate()

  return (
    <div className="categories__card">
      <a href="#!" className="categories__card-link"></a>
      <img className="categories__card-img" src={props.img} alt="Category" />
      <div className="categories__card-body">
        <div className="categories__card-text">
          <div className="categories__card-title">{props.title}</div>
          <button className="categories__card-muted">Explore Now!</button>
        </div>
        <div className="categories__card-icon">
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
