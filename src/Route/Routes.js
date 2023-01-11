import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);
