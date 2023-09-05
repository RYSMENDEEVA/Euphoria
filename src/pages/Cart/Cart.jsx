import {  Link, useNavigate } from "react-router-dom";
import {AiTwotoneDelete} from "react-icons/ai"
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Cart = () => {

    const {cart} = useContext(CustomContext)
    const navigate = useNavigate()

   

    return ( 
        <section className="cart">
            <div className="details">
                <div className="details__container container">
                    <h2 className="details__title">Product Details</h2>
                    <div className="details__right">
                        <p className="details__right-text">Price</p>
                        <p className="details__right-text">Quantity</p>
                        <p className="details__right-text">shipping</p>
                        <p className="details__right-text">subtotal</p>
                        <p className="details__right-text">action</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="cart__row">
                    { 
                        cart.map(item => (
                            <div className="cart__card"> 
                                <Link to={`/clothin/${item.id}`}>
                                    <img src={item.images[0]} alt="" className="cart__card-img"/>
                                </Link> 
                                    
                                <div className="cart__card-inf">
                                    <h2 className="cart__card-title">{item.title}</h2>
                                    <p className="cart__card-color">Color: {item.color}</p>
                                    <p className="cart__card-size">Size: {item.size}</p>
                                </div>
                                <p className="cart__card-price">${item.price}</p>
                                <p className="cart__card-count">{item.count}</p>
                                <button className="cart__card-delete">
                                    <AiTwotoneDelete/>
                                </button>
                            </div>
                        ))
                    }
                </div>
                <button onClick={() => navigate('/chekout')}>Proceed To Checkout</button>
            </div>
        </section>
     );
}
 
export default Cart;