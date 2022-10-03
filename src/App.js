import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import Produts from "./components/Products/Produts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "home",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/photos");
          },
          element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "products", element: <Produts /> },
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetail />,
        },
        {
          path: "posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
