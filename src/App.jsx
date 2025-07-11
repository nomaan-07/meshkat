import { createHashRouter } from "react-router-dom";

import AppLayout from "./ui/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
