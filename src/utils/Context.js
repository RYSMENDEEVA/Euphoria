import { createContext, useMemo } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {
    const [products, setProducts] = useState([]);
    const [gender, setGender] = useState();
    const [clothin, setClothin]= useState({})
    const [category, setCategory] = useState();
    const [isLoading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios('https://euphoriadb.onrender.com/products')
          .then(({ data }) => {
            setProducts(data);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [gender, category]);

    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            if (gender) return item.gender === gender;
            if (category) return category.includes(item.category);
            return true;
        })
    },[products,gender,category]);

    const getOneProduct = (id) => {
        axios(`https://euphoriadb.onrender.com/products/${id}`)
            .then(({data}) => setClothin(data))
            .catch((err) => console.log(err))
    }

    const addCart = (item) => {
        if (cart.some((el) => el.id === item.id)) {
          setCart(cart.map((el => el.id === item.id ? { ...item, count: el.count + 1 } : el)));
        } else {
          setCart([...cart, { ...item, count: 1 }]);
        }
    };



    const value = {
        products : filteredProducts,
        setProducts,
        isLoading,
        cart,
        setCart,
        addCart, 
        setGender,
        setCategory,
        clothin,       
        getOneProduct
    }
    return <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
}
