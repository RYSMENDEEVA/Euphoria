import React, { useContext } from 'react';
import { VscSettings } from 'react-icons/vsc';
import Slider from 'react-slider';
import { CustomContext } from '../../utils/Context';

const MIN = 10;
const MAX = 1000;

const Aside = () => {
  const { priceRange, setCategory, setPriceRange } = useContext(CustomContext);

  console.log();
  return (
    <div className="aside">
      <h2 className="aside-title">
        <span className="cfb"> Filter</span>
        <span>
          <VscSettings />
        </span>
      </h2>
      <p className="aside-row" onClick={() => setCategory(['top'])}>
        <span className="women__aside-text">Tops</span>
        <span className="aside-icon"></span>
      </p>
      <p className="aside-row" onClick={() => setCategory(['t-shirt'])}>
        <span className="women__aside-text">Plain T-shirts</span>
        <span className="aside-icon"></span>
      </p>
      <p className="aside-row" onClick={() => setCategory(['printed t-shirt'])}>
        <span className="women__aside-text">Printed T-shirts</span>
        <span className="aside-icon"></span>
      </p>
      <p className="aside-row" onClick={() => setCategory(['joggers'])}>
        <span className="women__aside-text">Joggers</span>
        <span className="aside-icon"></span>
      </p>
      <p className="aside-row" onClick={() => setCategory(['jeans'])}>
        <span className="women__aside-text">Jeans</span>
        <span className="aside-icon"></span>
      </p>
      <p className="aside-row" onClick={() => setCategory()}>
        <span className="women__aside-text">All</span>
        <span className="aside-icon"></span>
      </p>

      <div className="aside__price">
        <div className="aside__price-box">
          <h2>Price</h2>
        </div>
        <Slider
          className="aside__price-slider"
          onChange={setPriceRange}
          value={priceRange}
          min={MIN}
          max={MAX}
        />

        <div className="aside__price-values">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
