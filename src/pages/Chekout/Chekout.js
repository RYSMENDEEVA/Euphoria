import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import { useForm } from 'react-hook-form';
import { Api } from '../../api/api';
import orderImg from './../../assets/order.png';
import { useNavigate } from 'react-router-dom';

const Chekout = () => {
  const { user, accessToken, cart, setUser, orderPlaced, setOrderPlaced } =
    useContext(CustomContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addOrder = formValues => {
    const data = {
      orders: [
        ...user.orders,
        {
          ...formValues,
          clothes: cart,
          price: cart.reduce((acc, rec) => {
            return acc + rec.price * rec.count;
          }, 0),
        },
      ],
    };
    Api.addOrder(user.id, accessToken, data)
      .then(res => {
        setUser(res);
        setOrderPlaced(true);
      })
      .finally(() => reset());
  };

  /*const submit = formValues => {
    formValues;
  };*/
  console.log(errors);

  return (
    <section className="chekout">
      <div className="container">
        {orderPlaced ? (
          <div className="order-placed-message">
            <img src={orderImg} alt="" className="order-placed-img" />
            <button
              className="order-placed-btn"
              onClick={() => navigate('/combos')}
            >
              Continue to shopping
            </button>
          </div>
        ) : (
          <>
            <h1 className="chekout__title">Check Out</h1>
            <h2 className="chekout__subtitle">Billing Details</h2>
            <div className="chekout__row">
              <div className="chekout__form-left">
                <form
                  className="chekout__form"
                  onSubmit={handleSubmit(addOrder)}
                >
                  <div className="chekout__form__left-row">
                    <div>
                      <label htmlFor="fname">
                        <i className="fa fa-user"></i> First Name*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="firstname"
                        {...register('name')}
                        placeholder="First Name"
                      />
                      <label htmlFor="country">
                        <i className="fa fa-envelope"></i> Country / Region*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="country"
                        {...register('country')}
                        placeholder="Country / Region"
                      />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o"></i> Street Address*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="address"
                        {...register('streetAdress')}
                        placeholder="House number and street name"
                      />
                    </div>
                    <div>
                      <label htmlFor="fname">
                        <i className="fa fa-user"></i> Last Name*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="lasttname"
                        {...register('lastName')}
                        placeholder="Last Name"
                      />
                      <label htmlFor="email">
                        <i className="fa fa-envelope"></i> Email*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="email"
                        {...register('email')}
                        placeholder="Email"
                      />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o"></i> Apt, suite,
                        unit
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field"
                        name="address"
                        placeholder="apartment, suite, unit, etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="chekout__form__left-row colunm-gap-btm">
                    <div className="chekout__form-bottom">
                      <label htmlFor="fname">
                        <i className="fa fa-user"></i> City*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field chekout__form-field-btm"
                        name="city"
                        {...register('city')}
                        placeholder="Town / City"
                      />
                    </div>
                    <div className="chekout__form-bottom">
                      <label htmlFor="country">
                        <i className="fa fa-envelope"></i>State
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field chekout__form-field-btm"
                        name="state"
                        {...register('state')}
                        placeholder="State"
                      />
                    </div>
                    <div className="chekout__form-bottom">
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o"></i> Postal Code*
                      </label>
                      <input
                        type="text"
                        className="chekout__form-field chekout__form-field-btm"
                        name="Postal Code"
                        {...register('postalCode')}
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                  <div className="chekout__form-bottom">
                    <label htmlFor="adr">
                      <i className="fa fa-address-card-o"></i> Phone*
                    </label>
                    <input
                      type="number"
                      className="chekout__form-field"
                      name="phone"
                      {...register('phone')}
                      placeholder="Phone"
                    />
                  </div>
                  <button className="chekout__btn" type="submit">
                    Continue to delivery
                  </button>
                </form>
              </div>
              <div className="chekout__form-right">
                <h2 className="chekout__form-right-title">Order Summary</h2>
                <ul className="right__cards">
                  {cart.map((item, index) => (
                    <li key={index} className="right__card">
                      <img
                        src={item.images && item.images[0]}
                        alt="img"
                        className="right__card-img"
                      />
                      <div className="right__card-inf">
                        <p className="right__card-title">
                          {item.title}
                          <span className="right__card-count">
                            x{item.count}
                          </span>
                        </p>
                        <p className="right__card-color">Color:{item.color}</p>
                      </div>
                      <p className="right__card-price">${item.price}</p>
                    </li>
                  ))}
                </ul>
                <div className="total">
                  <span className="total__text">Total</span>
                  <span className="total__sum">
                    $
                    {cart.reduce((acc, rec) => {
                      return acc + rec.price * rec.count;
                    }, 0)}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Chekout;
