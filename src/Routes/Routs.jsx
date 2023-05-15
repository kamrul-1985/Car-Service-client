
import Home from "../Component/Home";
import Main from "../Component/Layout/Main";

import {
      createBrowserRouter
    } from "react-router-dom";
import About from "../Component/Pages/About";
import Service from "../Component/Pages/Service";
import LogIn from "../Component/Users/LogIn";
import Register from "../Component/Users/Register";
import Blog from "../Component/Pages/Blog";


const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>,
            },
            {
                  path:"/blog",
                  element:<Blog></Blog>,
            },
            {
                  path:"/service",
                  element:<Service></Service>,
            },
            {
                  path:"/login",
                  element:<LogIn></LogIn>,
            },
            {
                  path:"/register",
                  element:<Register></Register>,
            },
        ]
      },
    ]);
    export default router;