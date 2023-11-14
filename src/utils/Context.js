import React, { useCallback } from 'react';
import { createContext, useMemo } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CustomContext = createContext();

const MIN = 10;
const MAX = 1000;

export const Context = props => {
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState();
  const [clothin, setClothin] = useState({});
  const [category, setCategory] = useState();
  const [isLoading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [[minPrice, maxPrice], setPriceRange] = useState([MIN, MAX]);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userAuth')) {
      const { user, accessToken } = JSON.parse(
        localStorage.getItem('userAuth')
      );
      setUser(user);
      setAccessToken(accessToken);
    }
  }, []);

  const setUserAuth = userData => {
    localStorage.setItem('userAuth', JSON.stringify(userData));
    const { user, accessToken } = userData;
    setUser(user);
    setAccessToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem('userAuth');
    setUser(null);
    setAccessToken(null);
    navigate('/login');
  };

  const fetchProducts = useCallback(() => {
    setLoading(true);
    axios('https://euphoriadb.onrender.com/products')
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(item => {
      const genderFilter = gender ? item.gender === gender : true;
      const categoryFilter = category ? category.includes(item.category) : true;
      const priceFilter =
        Number(item.price) >= minPrice && Number(item.price) <= maxPrice;
      return genderFilter && categoryFilter && priceFilter;
    });
  }, [products, gender, category, minPrice, maxPrice]);

  const getOneProduct = id => {
    axios(`https://euphoriadb.onrender.com/products/${id}`)
      .then(({ data }) => setClothin(data))
      .catch(err => console.log(err));
  };

  const addCart = item => {
    if (
      cart.length &&
      cart.some(el => el.id == item.id) &&
      cart.map(el =>
        el.size === item.size && el.color === item.color ? true : false
      )
    ) {
      setCart(
        cart.map(el =>
          el.id == item.id && el.size === item.size && el.color === item.color
            ? { ...el, count: el.count + 1 }
            : el
        )
      );
    } else {
      setCart([...cart, { ...item, count: 1 }]);
      console.log(cart, item);
    }
  };

  const deleteCart = id => {
    return setCart(
      cart.filter(item => {
        return item.id !== id;
      })
    );
  };
  const addFavorite = item => {
    if (favorite.some(el => el.id === item.id)) {
      setFavorite(favorite.filter(el => el !== item.id));
    } else {
      setFavorite([...favorite, { ...item }]);
    }
  };
  const deleteFavorite = id => {
    return setFavorite(
      favorite.filter(item => {
        return item.id !== id;
      })
    );
  };

  const value = {
    products: filteredProducts,
    setProducts,
    isLoading,
    cart,
    setCart,
    addCart,
    setGender,
    setCategory,
    clothin,
    getOneProduct,
    deleteCart,
    favorite,
    setFavorite,
    deleteFavorite,
    addFavorite,
    setPriceRange,
    priceRange: [minPrice, maxPrice],
    user,
    accessToken,
    logout,
    setUserAuth,
    setUser,
    orderPlaced,
    setOrderPlaced,
    fetchProducts,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
