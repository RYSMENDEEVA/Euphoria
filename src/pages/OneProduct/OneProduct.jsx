import React, { useContext, useEffect, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineHeart } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { CustomContext } from '../../utils/Context';

const OneProduct = () => {
  const { id } = useParams();
  const { getOneProduct, addFavorite, clothin, addCart } =
    useContext(CustomContext);
  const [data, setData] = useState({
    title: '',
    price: '',
    size: '',
    color: '',
    id: '',
    images: [],
  });

  useEffect(() => {
    getOneProduct(id);
  }, [data]);

  const handleOnClickSize = size => {
    setData({
      ...data,
      size: size,
      title: clothin.title,
      price: clothin.price,
      images: [...clothin.images],
    });
  };
  const handleOnClickColor = color => {
    setData({ ...data, color: color, id: clothin.id + data.size + color });
  };
  return (
    <section className="product">
      <div className="container">
        <div className="product__row">
          <div className="product__left">
            <Swiper
              style={{ width: '520px' }}
              spaceBetween={30}
              effect={'fade'}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="product__left-img"
                  src={clothin.images && clothin.images[0]}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="product__left-img"
                  src={clothin.images && clothin.images[1]}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="product__left-img"
                  src={clothin.images && clothin.images[2]}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="product__left-img"
                  src={clothin.images && clothin.images[3]}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="product__right">
            <h2 className="product__right-title">{clothin.title}</h2>
            <div className="feedback__card-stars">
              <span className="feedback__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                    fill="#EDD146"
                  />
                </svg>
              </span>
              <span className="feedback__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                    fill="#EDD146"
                  />
                </svg>
              </span>
              <span className="feedback__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                    fill="#EDD146"
                  />
                </svg>
              </span>
              <span className="feedback__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6882 9.12325L14.7398 8.52407L12.0242 2.12646L9.30857 8.53374L2.36011 9.12325L7.63669 13.6943L6.05178 20.4882L12.0242 16.8835L17.9966 20.4882L16.4213 13.6943L21.6882 9.12325ZM12.0242 15.0763V6.08873L13.6767 9.99301L17.9096 10.3602L14.7011 13.1435L15.6675 17.2797L12.0242 15.0763Z"
                    fill="#EDD146"
                  />
                </svg>
              </span>
              <span className="feedback__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7476 9.12325L14.7991 8.52407L12.0835 2.12646L9.36789 8.53374L2.41943 9.12325L7.69601 13.6943L6.11111 20.4882L12.0835 16.8835L18.0559 20.4882L16.4806 13.6943L21.7476 9.12325ZM12.0835 15.0763L8.44981 17.2701L9.41621 13.1338L6.20775 10.3506L10.4406 9.98335L12.0835 6.08873L13.7361 9.99301L17.9689 10.3602L14.7604 13.1435L15.7268 17.2797L12.0835 15.0763Z"
                    fill="#EDD146"
                  />
                </svg>
              </span>
            </div>

            <p className="product__right-sizes-title">Select Size</p>
            <div className="product__right-sizes">
              {clothin.sizes?.map(el => (
                <span
                  key={el.id}
                  className="product__right-sizes-size"
                  onClick={() => handleOnClickSize(el.size)}
                  style={{
                    background: data.size === el.size ? '#3C4242' : 'white',
                    color: data.size === el.size ? 'white' : 'black',
                  }}
                >
                  {el.size}
                </span>
              ))}
            </div>
            <p className="product__right-colors-title">Colours Available</p>
            <div className="product__right-colors">
              {clothin.colors?.map(el => (
                <div
                  key={el.id}
                  className="product__right-colors-outer-line"
                  style={{
                    borderColor: el.color === data.color ? el.color : undefined,
                  }}
                  onClick={() => handleOnClickColor(el.color)}
                >
                  <div
                    style={{ backgroundColor: el.color }}
                    className="product__right-colors-inner"
                  ></div>
                </div>
              ))}
            </div>
            <div className="product__right-btns">
              <button
                disabled={
                  data?.size?.length && data?.color?.length ? false : true
                }
                className="product__right-btns-btn"
                onClick={() => addCart(data)}
              >
                <span className="icon">
                  <CiShoppingCart />
                </span>
                Add to cart
              </button>
              <button
                className="product__right-btns-btn"
                onClick={() => {
                  console.log(data);
                  addFavorite(clothin);
                }}
              >
                Add <AiOutlineHeart />
              </button>

              <p className="product__right-btns-price">{clothin.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneProduct;
