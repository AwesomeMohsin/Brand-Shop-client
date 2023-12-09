import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/AccountServices/Login";
import Register from "../pages/AccountServices/Register";
import AddProduct from "../pages/UserAccess/AddProduct";
import Cart from "../pages/UserAccess/Cart";
import PrivateRoute from "./PrivateRoute";
import BrandItems from "../pages/Collections/BrandItems";
import BrandItemDetails from "../pages/Collections/BrandItemDetails";
import UpdateProduct from "../pages/UserAccess/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/cart')

      },
      {
        path: '/products/:brandName',
        element: <BrandItems></BrandItems>,
        loader: ({ params }) => fetch(`https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/products/${params.brandName}`)
      },
      {
        path: '/products/:brandName/:id',
        element: <PrivateRoute><BrandItemDetails></BrandItemDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/products/${params.brandName}/${params.id}`)
      },
      {
        path: '/products/update/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/products/${params.brandName}/${params.id}`)
      },

    ]
  },
]);

export default router;