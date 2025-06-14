import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Loading from "../Pages/Laoding/Loading";
import Home from "../Home/home";
import ErrorLayout from "../Layouts/ErrorLayout";
import Register from "../Pages/Resiter/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/login/Login";
import JobDetails from "../Pages/jobDetails/JobDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/applications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/Login",
        element: <Login></Login>,
      },
      {
        path: "/auth/Register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/auth",
    Component: ErrorLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
