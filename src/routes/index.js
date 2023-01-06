import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";

export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },{
          path :"/my-comics",
          element: <MyComics />
        },{
        path :"/new-comic",
        element: <AddNewComic />
      }
      ]
    },
  
  ])

export default indexRouter  