import Arrivals from "../Arrivals/Arrivals";


const Sale = (props) => {
    return ( 
        <div className="sale__card" style={{background: `url(${props.img}) center/cover no-repeat`}}>
                <p className="sale__title">{props.title}</p>
                <p className="sale__subtitle">{props.subtitle}</p>
                <p className="sale__sales">UPTO 50% OFF</p>
                <button className="sale__btn">Explore Items</button>
        </div>

     );
}
 
export default Sale;