import { RouterProvider } from "react-router";
import { createHashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import VerificationCodeForm from "./pages/VerificationCodeForm";

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
