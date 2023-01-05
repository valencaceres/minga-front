import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import AddNewComic from '../router/NewComic/AddNewComic.jsx'

export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },{
        path :"/new-comic",
        element: <AddNewComic />
      }
      ]
    },
  
  ])

export default indexRouter  