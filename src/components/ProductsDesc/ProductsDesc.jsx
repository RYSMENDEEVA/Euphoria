import React from "react";

const ProductsDesc = ({title}) => {
    return ( 
        <>
        <p className="women__right-text">{title}</p>
           <p className="women__right-span">
                  <span className="women__right-text new-color">New </span>
                  <span className="women__right-text">Recommended</span> 
            </p> 
        </>
     );
}
 
export default ProductsDesc;