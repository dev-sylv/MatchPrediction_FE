import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../components";

const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [],
  },
]);
