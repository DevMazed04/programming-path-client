import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch("https://programming-path-server.vercel.app/courses")
      },
      {
        path: '/course-details/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://programming-path-server.vercel.app/course-details/${params.id}`)
      },
      {
        path: '/checkout',
        element:
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
      },
      {
        path: '/faq',
        element: <Blog></Blog>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '*',
    element: <Page404></Page404>
  }
])