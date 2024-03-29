import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Register } from "../../pages/Register/Register";
import { Login } from "../../pages/Login/Login";
import "./App.scss";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        //   {
        //     path: "/register",
        //     element: (
        //       <PublicRoute component={Register} redirectedTo="/dashboard" />
        //     ),
        //   },
        //   {
        //     path: "/login",
        //     element: <PublicRoute component={Login} redirectedTo="/dashboard" />,
        //   },
        //   {
        //     path: "/dashboard",
        //     element: <PrivateRoute component={Dashboard} redirectedTo="/login" />,
        //   },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    { path: "*", element: <Home /> },
  ],
  {
    basename: "/questify",
  }
);

export const App = () => {
  return <RouterProvider router={router} />;
};
