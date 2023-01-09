import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";

export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },

        {
          path: "/comments",
          element: <Comments />
        }
      ]
    },
  
  ])

export default indexRouter  