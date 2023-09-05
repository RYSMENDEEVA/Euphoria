import { Link } from "react-router-dom";

const Chekout = () => {
    return ( 
        <section className="chekout">
            <div className="container">
                <h1 className="chekout__title">Check Out</h1>
                <h2 className="chekout__subtitle">Billing Details</h2>
                <div className="chekout__row">
                    <div className="chekout__form-left">
                        <form className="chekout__form">   
                            <div className="chekout__form__left-row">
                                <div>
                                    <label for="fname"><i class="fa fa-user"></i> First Name*</label>
                                    <input type="text" className="chekout__form-field" name="firstname" placeholder="First Name"/>
                                    <label for="country"><i class="fa fa-envelope"></i> Country / Region*</label>
                                    <input type="text" className="chekout__form-field" name="country" placeholder="Country / Region"/>
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Street Address*</label>
                                    <input type="text" className="chekout__form-field" name="address" placeholder="House number and street name"/>
                                </div>
                                <div>
                                    <label for="fname"><i class="fa fa-user"></i> Last Name*</label>
                                    <input type="text" className="chekout__form-field" name="lasttname" placeholder="Last Name"/>
                                    <label for="email"><i class="fa fa-envelope"></i> Email*</label>
                                    <input type="text" className="chekout__form-field" name="email" placeholder="Email"/>
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Apt, suite, unit</label>
                                    <input type="text" className="chekout__form-field" name="address" placeholder="apartment, suite, unit, etc. (optional)"/>
                                </div>
                            </div>
                            <div className="chekout__form__left-row colunm-gap-btm">
                                <div className="chekout__form-bottom">
                                    <label for="fname"><i class="fa fa-user"></i> City*</label>
                                    <input type="text" className="chekout__form-field chekout__form-field-btm" name="city" placeholder="Town / City"/>
                                </div>
                                <div className="chekout__form-bottom">
                                    <label for="country"><i class="fa fa-envelope"></i>State*</label>
                                    <input type="text" className="chekout__form-field chekout__form-field-btm" name="state" placeholder="State"/>
                                </div>
                                <div className="chekout__form-bottom">
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Postal Code*</label>
                                    <input type="text" className="chekout__form-field chekout__form-field-btm" name="address" placeholder="Postal Code"/>
                                </div>        
                            </div>
                            <div className="chekout__form-bottom">
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Phone*</label>
                                    <input type="number" className="chekout__form-field" name="phone" placeholder="Phone"/>
                            </div>
                        </form>
                        <button className="chekout__btn">Continue to delivery</button>
                    </div>
                    <div className="chekout__form-right">
                        <h2 className="chekout__form-right-title">Order Summary</h2>
                        <div className="right__card">
                                <Link >
                                    <img src="" alt="img" className="right__card-img"/>
                                </Link>
                                <div className="right__card-inf">
                                    <p className="right__card-title">title</p>
                                    <p className="right__card-color">Color:</p>
                                </div>
                                <p className="right__card-price">price</p>
                        </div>
                        <div className="total">
                            <p className="total__text">Subtotal</p>
                            <p className="total__text">Savings</p>
                            <p className="total__text">Shipping</p>
                            <p className="total__text">Total</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Chekout;