import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Earn from "../pages/earn";
import Stats from "../pages/stats";
import Feeds from "../pages/feed";
import Notfound from "../pages/notfound";
import Mint from "../pages/mint";

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
  {
    path: "/mint",
    element: <Mint />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
