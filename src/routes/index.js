import { createBrowserRouter } from "react-router-dom";
import Carousel from "../components/carousel.jsx";
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";
import MyComics from "./MyComics/MyComics.jsx";
import NewComic from "./NewComic/NewComic.jsx";
import NewAuthor from "./NewAuthor/NewAuthor.jsx";
import NewChapter from "./NewKhapter/NewChapter.jsx";
import ComicsFromCompany from "./ComicsCompany/Comics.From.Company.jsx";
import Comics from "./Comics/Comics.jsx";
import NewCompany from "./newCompany/NewCompany.jsx";
import Comic from "./Comic/Comic.jsx";
import Pages from "./pages/Pages.jsx";
<<<<<<< HEAD
import MeComics from "./MeComics/MeComics";


=======
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
>>>>>>> 55f0a3d1c40640fab9fb305177103937a9bebb6e

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
          element: <NewComic />
        },{
          path: "/comments",
          element: <Comments />
        }
      ]
    },
    {
      path :"/new-author",
      element: <NewAuthor />
    },
    {
      path: "/new-chapter",
      element: <NewChapter/>
    },
    {
      path: "/new-cia",
      element: <NewCompany />
    },
    {
      path: "/company/:id",
      element: <ComicsFromCompany/>
    },
    {
      path: "/pages/:id",
      element: <Pages/>
    },
    {
      path: "/comic/:id",
      element: <Comic/>
    },
    {
        path: "/comics",
        element: <Comics />,
    },
<<<<<<< HEAD
    {
      path: "/comics/me",
      element: <MeComics/>
    }

=======
    ,{
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    }
>>>>>>> 55f0a3d1c40640fab9fb305177103937a9bebb6e

  ])

export default indexRouter;
