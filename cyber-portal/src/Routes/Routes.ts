import { createBrowserRouter } from "react-router";
import App from "../App";
import Banner from "../Pages/Banner/Banner";
import About from "../Pages/About/AboutPage";
import Services from "../Pages/Services/ServicesPage";
import Industries from "../Pages/Pages/IndustriePage";
import Blog from "../Pages/Blog/BlogPage";
import EmployeeForm from "../Pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path : "/",
    Component : App,
    children:[
      {
        index : true,
        Component : Banner
      },
      {
        path :"about",
        Component : About
      },
      {
        path :"services",
        Component : Services
      },
      {
        path : "pages",
        Component : Industries
      },
      {
        path : "blog",
        Component : Blog
      },
      {
        path : "contact",
        Component : EmployeeForm
      }
    ]
  }
])