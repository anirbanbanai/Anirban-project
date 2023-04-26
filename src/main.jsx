import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login';
import AuthProvider from './Components/AuthProvider ';
import Register from './Components/Register';
import Main from './Components/Main';
import PrivetRoute from './Components/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
         path:"/",
         element:<PrivetRoute><Home></Home></PrivetRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </AuthProvider>
)
