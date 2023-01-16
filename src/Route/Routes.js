import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Home from "../components/Shared/Home/Home";
import Main from "../Layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/users/login",
        element: <Login></Login>,
      },
      {
        path: "/users/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
