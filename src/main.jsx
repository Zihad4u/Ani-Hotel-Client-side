import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './Error.jsx';
import Root from './Home/Root.jsx';
import Login from './Login/Login.jsx';
import AuthContext from './Authprovider/AuthContext.jsx';
import Registration from './Login/Registration.jsx';
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home.jsx';
import FeatureDetails from './FeatureSection/FeatureDetails.jsx';
import Mybooking from './Mybooking/Mybooking.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Rooms from './Rooms/Rooms.jsx';
import ContactUs from './ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Registration />
      },
      {
        path: "myBookings",
        element: <PrivateRoute><Mybooking /></PrivateRoute>
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: "/featureDetails/:id",
        element: <PrivateRoute><FeatureDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-ten-phi.vercel.app/featureDetails/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router} /><ToastContainer /></AuthContext>
  </React.StrictMode>,
)
