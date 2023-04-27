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
import Edu from './Components/Edu';
import JObLife from './Components/JObLife';

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
      },
      {
        path:"/edu",
        element:<PrivetRoute><Edu></Edu></PrivetRoute>
      },
      {
        path:"/job",
        element:<JObLife></JObLife>
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
