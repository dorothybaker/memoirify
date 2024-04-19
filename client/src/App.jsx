import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Write from "./pages/Write";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./context/context";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/posts", element: <Posts /> },
        { path: "/post/:id", element: <Post /> },

        {
          path: "/write",
          element: user ? <Write /> : <Navigate to="/login" />,
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Navigate to="/login" />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
