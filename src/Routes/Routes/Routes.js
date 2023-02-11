import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Checkout from "../../Components/Checkout/Checkout";
import CourseCardDetails from "../../Components/CourseCardDetails/CourseCardDetails";
import Courses from "../../Components/Courses/Courses";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/courses`),
      },
      {
        path: "/courses/:id",
        element: <CourseCardDetails></CourseCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/courses/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/checkout/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
