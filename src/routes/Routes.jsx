import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import UsersList from "../pages/Users/UsersList";
import UserDetails from "../pages/Users/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/users",
        element: <UsersList />,
      },
      {
        path: "/user/:userId",
        element: <UserDetails />,
      },
    ],
  },
]);

export default router;
