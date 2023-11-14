import React, { useContext, useEffect } from 'react';
import Collection from '../../components/Collection/Collection';
import { CustomContext } from '../../utils/Context';

const Combos = () => {
  const { products, isLoading, setGender, setCategory } =
    useContext(CustomContext);

  useEffect(() => {
    setGender();
    setCategory();
  }, []);

  return (
    <Collection
      products={products}
      title="All Products"
      isLoading={isLoading}
    />
  );
};

export default Combos;
