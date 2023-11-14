import React from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import {
  AiTwotoneDelete,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';

const Favorites = () => {
  const { favorite, deleteFavorite, clothin } = useContext(CustomContext);
  const navigate = useNavigate();
  const { logout } = useContext(CustomContext);

  return (
    <section className="fav">
      <div className="container">
        <div className="favorit__row">
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
          <div className="fav__row">
            {favorite.length ? (
              favorite.map(item => (
                <>
                  <div className="fav__card">
                    <img
                      src={item.images && item.images[0]}
                      alt=""
                      className="fav__card-img"
                    />

                    <div className="fav__card-inf">
                      <h2 className="fav__card-title">{item.title}</h2>
                      <div className="">
                        {clothin.colors?.map(el => (
                          <span
                            key={el.id}
                            className="fav__color"
                            style={{ background: el.color }}
                          />
                        ))}
                      </div>
                      <div className="fav__sizes">
                        {clothin.sizes?.map(el => (
                          <span key={el.id} className="fav__size">
                            {el.size}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="fav__card-info">
                      <p className="fav__card-price">${item.price}</p>

                      <button
                        className="fav__card-delete"
                        onClick={() => deleteFavorite(item.id)}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div className="empty">
                <div className="empty__box">
                  <p className="empty__img">
                    <svg
                      width="170"
                      height="170"
                      viewBox="0 0 170 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="85" cy="85" r="85" fill="#F0F9F4" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M85.4787 63.46C79.2557 56.2078 68.8785 54.257 61.0815 60.8978C53.2845 67.5387 52.1868 78.6418 58.3098 86.4959C63.4007 93.0261 78.8074 106.799 83.8569 111.256C84.4218 111.755 84.7043 112.005 85.0338 112.103C85.3214 112.188 85.636 112.188 85.9236 112.103C86.2531 112.005 86.5355 111.755 87.1005 111.256C92.15 106.799 107.557 93.0261 112.648 86.4959C118.771 78.6418 117.807 67.4688 109.876 60.8978C101.945 54.3269 91.7017 56.2078 85.4787 63.46Z"
                        stroke="#28A642"
                        strokeWidth="6.225"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                  <p className="empty__title">Your wishlist is empty.</p>
                  <p className="empty__desc">Add something to make it happy!</p>
                  <button
                    className="empty__btn"
                    onClick={() => navigate('/combos')}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
