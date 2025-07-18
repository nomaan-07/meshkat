import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, RouterProvider } from "react-router";
import { createHashRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Account from "./pages/Account.jsx";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import VerificationCodeForm from "./pages/VerificationCodeForm";
import Spinner from "./ui/common/Spinner";
import AppLayout from "./ui/layout/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: "30 * 1000",
    },
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "verification",
    element: <VerificationCodeForm />,
  },
  {
    path: "spinner",
    element: <Spinner />,
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
