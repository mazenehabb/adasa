import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticaleDetailsPage from "./pages/ArticaleDetailsPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import BlogPage from "./pages/BlogPage";
import ArticaleCard from "./components/cards/articaleCard/ArticaleCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        { path: "detalisArticle", element: <ArticaleDetailsPage /> },
        { path: "blogPage", element: <BlogPage /> },
        { path: "blog/:slug", element: <ArticaleDetailsPage /> },
        {
          path: "*",
          element: <p>Not Found</p>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
