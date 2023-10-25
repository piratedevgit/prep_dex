import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Earn from "../pages/earn";
import Stats from "../pages/stats";
import Feeds from "../pages/feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feeds />,
  },
  {
    path: "/earn",
    element: <Earn />,
  },
  {
    path: "/stats",
    element: <Stats />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
