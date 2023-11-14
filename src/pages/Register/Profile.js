import React from 'react';
import { useContext, useEffect } from 'react';
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(CustomContext);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, []);

  return (
    <section className="profile">
      <div className="container">
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
          <div className="profile__right">
            <h2 className="profile__right-title">My Info</h2>
            <p className="profile__right-subtitle">Contact Details</p>
            <form action="">
              <label htmlFor="name">
                <i className="fa fa-user"></i> Your Name
              </label>
              <input
                type="text"
                className="profile__form-field"
                name="firstname"
                defaultValue={'Adinai'}
                placeholder=" Name"
              />
              <label htmlFor="country">
                <i className="fa fa-envelope"></i> Email Address
              </label>
              <input
                type="email"
                className="profile__form-field"
                name="country"
                defaultValue={user?.email}
                placeholder="Email"
              />
              <label htmlFor="adr">
                <i className="fa fa-address-card-o"></i>Password{' '}
              </label>
              <input
                type="password"
                className="profile__form-field"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
