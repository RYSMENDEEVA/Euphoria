import React, { useContext, useEffect } from 'react';
import Collection from '../../components/Collection/Collection';
import { CustomContext } from '../../utils/Context';

const Men = () => {
  const { products, isLoading, setGender } = useContext(CustomContext);

  useEffect(() => {
    setGender('men');
  }, []);

  return (
    <Collection
      products={products}
      title="Men's Clothes"
      isLoading={isLoading}
    />
  );
};

export default Men;
