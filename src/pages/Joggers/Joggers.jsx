import React, { useContext, useEffect, useState } from "react";
import Collection from "../../components/Collection/Collection";
import { CustomContext } from "../../utils/Context";

const Joggers = () => {
  const {products,isLoading,setGender,setCategory} = useContext(CustomContext);

    useEffect(() => {
        setCategory(['jeans', 'joggers']);
      },[])

    return ( 
      <Collection products={products} title="Jeans and Joggers" isLoading={isLoading}/>
     );
}
 
export default Joggers;