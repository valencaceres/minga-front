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
import MeComics from "./MeComics/MeComics";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import Profile from "./Profile/Profile.jsx";
import Welcome from "../components/welcome/Welcome.js";
import SuccessPayment from "./success-payment/Success-payment.jsx";
import EditChapter from "./EditChapter/EditChapter.jsx";


export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        }
      ]
    },
    {
      path :"/new-comic",
      element: <NewComic />
    },
    {
      path :"/my-comics",
      element: <MyComics />
    },
    {
      path: "/comments",
      element: <Comments />
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
    {
      path: "/comics/me",
      element: <MeComics/>
    }

    ,{
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path: "/edit-chapters",
      element: <EditChapter/>,
    },
    {
      path:"/edit-profile",
      element:<Profile/>
    },
    {
      path:"/verify/:verify_Code",
      element: <Welcome/> 
    },
    {
      path:"/admin",
      element:<AdminPanel/>
    },
    {
      path:"/edit-profile",
      element:<Profile/>
    },
    {
      path:"/success-payment",
      element:<SuccessPayment/>
    }
  ])

export default indexRouter;
