import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Women from '../pages/Women/Women';
import Men from '../pages/Men/Men';
import Combos from '../pages/Combos/Combos';
import Joggers from '../pages/Joggers/Joggers';
import OneProduct from '../pages/OneProduct/OneProduct';
import Cart from '../pages/Cart/Cart';
import Chekout from '../pages/Chekout/Chekout';
import Register from '../pages/Register/Register';
import Favorites from '../pages/Favorites/Favorites';
import Login from '../pages/Register/Login';
import Profile from '../pages/Register/Profile';
import { Context } from './Context';

import Orders from '../pages/Orders/Orders';
import AdminPanel from '../pages/AdminPanel/AdminPanel.js';

const PageWrapper = ({ children }) => {
  return <Context>{children}</Context>;
};

export default function Router() {
  const routes = useRoutes([
    {
      path: '',
      element: (
        <PageWrapper>
          <Layout />
        </PageWrapper>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/women',
          element: <Women />,
        },
        {
          path: '/men',
          element: <Men />,
        },
        {
          path: '/combos',
          element: <Combos />,
        },
        {
          path: '/joggers',
          element: <Joggers />,
        },
        {
          path: '/product/:id',
          element: <OneProduct />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/chekout',
          element: <Chekout />,
        },
        {
          path: '/user',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/favorites',
          element: <Favorites />,
        },
        {
          path: '/adminPanel',
          element: <AdminPanel />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
      ],
    },
  ]);
  return routes;
}
