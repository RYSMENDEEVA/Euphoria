import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Women from "../pages/Women/Women";
import Men from "../pages/Men/Men";
import Combos from "../pages/Combos/Combos";
import Joggers from "../pages/Joggers/Joggers";
import OneProduct from "../pages/OneProduct/OneProduct";
import Cart from "../pages/Cart/Cart";
import Chekout from "../pages/Chekout/Chekout";
import Register from "../pages/Register/Register";
import Favorites from "../pages/Favorites/Favorites";



export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/women',
                    element: <Women/>
                },
                {
                    path: '/men',
                    element: <Men/>
                },
                {
                    path: '/combos',
                    element: <Combos/>
                },
                {
                    path: '/joggers',
                    element: <Joggers/>
                },
                {
                    path: '/product/:id',
                    element: <OneProduct/>
                },
                {
                    path: '/cart',
                    element: <Cart/>
                },
                {
                    path: '/chekout',
                    element: <Chekout/>
                },
                {
                    path: '/user',
                    element: <Register/>
                },
                {
                    path: '/favorites',
                    element: <Favorites/>
                }

            ]
        }
    ])
    return routes
}

