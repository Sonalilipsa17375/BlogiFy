import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Write from "./pages/Write";
// import ParticlesComponent from "./components/particles";
// import "./style.scss";

export const PostContext = createContext();

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="appy">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      <div className="app">
        {/* <ParticlesComponent id="particles" /> */}
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </PostContext.Provider>
  );
};

export default App;
