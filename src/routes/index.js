import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
/* import Chapters from "./Newchapters/Newchapters.jsx"; */


export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },{
          path: "/chapters",
          element: <Chapters/>
        }
      ]
    },
  
  ])

export default indexRouter  