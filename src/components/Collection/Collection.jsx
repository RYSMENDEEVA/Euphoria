import React from 'react';
import Card from '../../components/Card/Card';
import ProductsDesc from '../../components/ProductsDesc/ProductsDesc';
import Aside from '../../components/Aside/Aside';
import { Link } from 'react-router-dom';

const Collection = ({ title, products, isLoading }) => {
  return (
    <section className="women">
      <div className="container">
        <div className="women__row">
          <Aside />
          <div className="women__right">
            <div className="products__right-desc">
              <ProductsDesc title={title} />
            </div>
            {isLoading ? <h3>loading...</h3> : null}
            <div className="women__right-products">
              {products.map((item, idx) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <Card
                    key={item.id || idx}
                    image={item.id && item.images[0]}
                    title={item.title}
                    price={item.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
