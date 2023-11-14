import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { user, logout } = useContext(CustomContext);
  const navigate = useNavigate();

  return (
    <section className="orders">
      <div className="container">
        <div className="orders__row">
          <div className="profile__row">
            <div className="profile__left">
              <h2 className="profile__left-title">Hello </h2>
              <p className="profile__left-desc">Welcome to your Account</p>
              <div className="profile__left-colunm">
                <p className="profile__left-row">
                  <span className="profile__left-icon">
                    <AiOutlineShopping />
                  </span>
                  <span
                    className="profile__left-text"
                    onClick={() => navigate('/orders')}
                  >
                    My orders
                  </span>
                </p>
                <p
                  className="profile__left-row"
                  onClick={() => navigate('/favorites')}
                >
                  <span className="profile__left-icon">
                    <AiOutlineHeart />
                  </span>
                  <span className="profile__left-text">Wishlist</span>
                </p>
                <p
                  className="profile__left-row"
                  onClick={() => navigate('/profile')}
                >
                  <span className="profile__left-icon">
                    <AiOutlineUser />
                  </span>
                  <span className="profile__left-text">My info</span>
                </p>
                <p className="profile__left-row" onClick={logout}>
                  <span className="profile__left-icon">
                    <BiExit />
                  </span>
                  <span className="profile__left-text">Sign out</span>
                </p>
              </div>
            </div>
          </div>
          <div className="orders">
            <h2 className="profile__right-title">My Orders</h2>
            {user.orders.map((order, index) => (
              <div key={index} className="order">
                <ul>
                  {order.clothes.map((item, itemIndex) => (
                    <div key={itemIndex} className="cart__card">
                      <img
                        src={item.images && item.images[0]}
                        alt=""
                        className="cart__card-img"
                        style={{ height: '157px' }}
                      />
                      <div className="cart__card-inf">
                        <h2 className="cart__card-title">{item.title}</h2>
                        <p className="cart__card-color">
                          Color:{' '}
                          <span className="cart__card-col">{item.color}</span>
                        </p>
                        <p className="cart__card-size">
                          Size:{' '}
                          <span className="cart__card-siz">{item.size}</span>
                        </p>
                        <p className="cart__card-info">
                          <p className="cart__card-price">${item.price}</p>
                          <p className="cart__card-count">x{item.count}</p>
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
/*{order.clothes.map((item, itemIndex) => (
    <li key={itemIndex}>
      {item.title} x{item.count}
    </li>
  ))}*/
