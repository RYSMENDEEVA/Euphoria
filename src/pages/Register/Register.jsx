import {AiOutlineShopping, AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {BiExit} from "react-icons/bi"



const Register = () => {
    return ( 
        <section className="register">
            <div className="container">
                <div className="register__row">
                    <div className="register__left">
                        <h2 className="register__left-title">Hello Jhanvi</h2>
                        <p className="register__left-desc">Welcome to your Account</p>
                        <div className="register__left-colunm">
                            <p className="register__left-row">
                                <span className="register__left-icon"><AiOutlineShopping/></span>
                                <span className="register__left-text">My orders</span>
                            </p>
                            <p className="register__left-row">
                                <span className="register__left-icon"><AiOutlineHeart/></span>
                                <span className="register__left-text">Wishlist</span>
                            </p>
                            <p className="register__left-row">
                                <span className="register__left-icon"><AiOutlineUser/></span>
                                <span className="register__left-text">My info</span>
                            </p>
                            <p className="register__left-row">
                                <span className="register__left-icon"><BiExit/></span>
                                <span className="register__left-text">Sign out</span>
                            </p>
                        </div>
                    </div>
                    <div className="register__right">
                        <h2 className="register__right-title">My Info</h2>
                        <p className="register__right-subtitle">Contact Details</p>
                        <form action="">
                               <label for="name"><i class="fa fa-user"></i> Your Name</label>
                                <input type="text" className="register__form-field" name="firstname" placeholder=" Name"/>
                                <label for="country"><i class="fa fa-envelope"></i> Email Address</label>
                                <input type="email" className="register__form-field" name="country" placeholder="Email"/>
                                <label for="adr"><i class="fa fa-address-card-o"></i> Phone Number</label>
                                <input type="number" className="register__form-field" name="address" placeholder="Phone"/>
                                <label for="adr"><i class="fa fa-address-card-o"></i>Password </label>
                                <input type="password" className="register__form-field" name="address" placeholder="Password"/>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Register;