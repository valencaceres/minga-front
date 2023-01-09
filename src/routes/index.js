import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";
import NewComic from "./NewComic/NewComic.jsx"
import Chapters from "./Newchapters/Newchapters.jsx";

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
        },{
          path: "/chapters",
          element: <Chapters/>
        },{
          path: "/comments",
          element: <Comments />
        }
      ]
    },
  
  ])

export default indexRouter  