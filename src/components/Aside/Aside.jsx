import {VscSettings} from "react-icons/vsc"
import  Slider from 'react-slider';
import { useState } from "react";

const MIN = 10;
const MAX = 2000;

const Aside = () => {

   const [values, setValues] = useState([MIN, MAX])

    return ( 

        <div className="aside">
            <h2 className="aside-title">
                <span className="cfb"> Filter</span>
                <span><VscSettings/></span>
            </h2>
            <p className="aside-row">
                <span women__aside-text>Tops</span>
                <span className="aside-icon"></span>
            </p>
            <p className="aside-row">
                <span women__aside-text>Plain T-shirts</span>
                <span className="aside-icon"></span>
            </p>
            <p className="aside-row">
                <span women__aside-text>Printed T-shirts</span>
                <span className="aside-icon"></span>
            </p>
            <p className="aside-row">
                <span women__aside-text>Joggers</span>
                <span className="aside-icon"></span>
            </p>
            <p className="aside-row">
                <span women__aside-text>Jeans</span>
                <span className="aside-icon"></span>
            </p>
            <div className="aside__price">
                <div className="aside__price-box">
                    <h2>Price</h2>
                </div>
                <Slider className="aside__price-slider"
                      onChange={setValues}
                      value={values}
                      min={MIN}
                      max={MAX} />

                <div className="aside__price-values">
                    <span>${values[0]}</span>
                    <span>${values[1]}</span>   
                </div>      
            </div>
        </div>

     );
}
 
export default Aside;