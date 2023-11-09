import React from "react";
import ReactDOM from "react-dom/client";
import Hom from "./pages/home";
import CRUD from "./pages/crud";
import Create from "./pages/create";
import Update from "./pages/update";
import Delete from "./pages/delete";
import Read from "./pages/read";
import Cross from "./pages/crosswalk";
import ReadCross from "./pages/readcross";
import CreateCross from "./pages/createcross";
import Updatecross from "./pages/updatecross";
import Deletecross from "./pages/deletecross";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hom />,
  },
  {
    path: "/crud",
    element: <CRUD />,
  },
  {
    path: "/crud/create",
    element: <Create />,
  },
  {
    path: "/crud/update",
    element: <Update />,
  },
  {
    path: "/crud/delete",
    element: <Delete />,
  },
  {
    path: "/crud/read",
    element: <Read />,
  },
  {
    path: "/cross",
    element: <Cross />,
  },
  {
    path: "/cross/read",
    element: <ReadCross />,
  },
  {
    path: "/cross/create",
    element: <CreateCross />,
  },
  {
    path: "/cross/update",
    element: <Updatecross />,
  },
  {
    path: "/cross/delete",
    element: <Deletecross />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
