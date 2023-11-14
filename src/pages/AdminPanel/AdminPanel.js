import React, { useContext, useEffect, useState } from 'react';
import { CustomContext } from '../../utils/Context';
import axios from 'axios';

const AdminPanel = () => {
  const { setGender, setCategory, products, fetchProducts } =
    useContext(CustomContext);
  const categories = [
    'top',
    't-shirt',
    'printed t-shirt',
    'sweatshirts',
    'jeans',
    'joggers',
  ];
  const gender = ['men', 'women'];
  useEffect(() => {
    setGender();
    setCategory();
  }, []);

  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    price: 0,
    category: '',
    images: [],
    sizes: [
      {
        id: 1,
        size: 'S',
      },
      {
        id: 2,
        size: 'M',
      },
      {
        id: 3,
        size: 'L',
      },
      {
        id: 4,
        size: 'XL',
      },
      {
        id: 5,
        size: 'XXL',
      },
    ],
    colors: [
      {
        id: 1,
        color: 'white',
      },
      {
        id: 2,
        color: 'blue',
      },
      {
        id: 3,
        color: 'black',
      },
    ],
    gender: [],
  });
  const updatedSizes = [...newProduct.sizes];
  const updatedColors = [...newProduct.colors];

  const handleAdd = () => {
    axios
      .post(`https://euphoriadb.onrender.com/products`, { ...newProduct })
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        setNewProduct({
          id: '',
          title: '',
          price: 0,
          category: '',
          images: [],
          sizes: [
            {
              id: 1,
              size: 'S',
            },
            {
              id: 2,
              size: 'M',
            },
            {
              id: 3,
              size: 'L',
            },
            {
              id: 4,
              size: 'XL',
            },
            {
              id: 5,
              size: 'XXL',
            },
          ],
          colors: [
            {
              id: 1,
              color: 'white',
            },
            {
              id: 2,
              color: 'blue',
            },
            {
              id: 3,
              color: 'black',
            },
          ],
          gender: [],
        });
        fetchProducts();
      });
  };

  const handleDelete = id => {
    // eslint-disable-next-line no-unused-vars
    axios.delete(`https://euphoriadb.onrender.com/products/${id}`).then(res => {
      setCategory();
      setGender();
      fetchProducts();
    });
  };

  return (
    <section className="admin">
      <div className="container__admin">
        <div className="admin__form">
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={e =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={e =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="size"
            value={updatedSizes[updatedSizes.length - 1].size} // Получите доступ к последнему добавленному размеру
            onChange={e => {
              updatedSizes[updatedSizes.length - 1].size = e.target.value;
              setNewProduct({ ...newProduct, sizes: updatedSizes });
            }}
          />

          <input
            type="text"
            placeholder="color"
            value={updatedColors[updatedColors.length - 1].color} // Получите доступ к последнему добавленному цвету
            onChange={e => {
              updatedColors[updatedColors.length - 1].color = e.target.value;
              setNewProduct({ ...newProduct, colors: updatedColors });
            }}
          />

          <input
            type="text"
            placeholder="Image"
            value={newProduct.images}
            onChange={e =>
              setNewProduct({
                ...newProduct,
                images: [e.target.value],
              })
            }
          />
          <select
            onChange={e =>
              setNewProduct({ ...newProduct, gender: e.target.value })
            }
            className="admin__select"
          >
            <option selected disabled part="button">
              gender
            </option>
            {gender.map(item => (
              // eslint-disable-next-line react/jsx-key
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            onChange={e =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="admin__select"
          >
            <option selected disabled part="button">
              Category
            </option>
            {categories.map(item => (
              // eslint-disable-next-line react/jsx-key
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button className="admin__form-btn" onClick={() => handleAdd()}>
            Add
          </button>
        </div>
        <div className="admin__row">
          {products.map((item, index) => (
            <div key={index} className="admin__card">
              <h2 className="admin__title">
                {index + 1}. {item.title}
              </h2>
              <div className="admin__btns">
                <button className="admin__btn">update</button>
                <button
                  className="admin__btn"
                  onClick={() => handleDelete(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
