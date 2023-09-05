import React, { useContext, useEffect } from "react";
import Collection from "../../components/Collection/Collection";
import { CustomContext } from "../../utils/Context";


const Women = () => {
    const {products,isLoading,setGender,setCategory} = useContext(CustomContext);

    useEffect(() => {
        setGender('woman');
      },[])

    return ( 
        <Collection products={products} title="Women’s Clothing" isLoading={isLoading}/>
     );
}
 
export default Women;