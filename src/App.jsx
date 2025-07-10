<<<<<<< HEAD
import { createHashRouter } from "react-router-dom";

import AppLayout from "./ui/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
// import Login from "./pages/Login";
import Login from "./pages/Login-v1";
// import SignUp from "./pages/SignUp";
import SignUp from "./pages/SignUp-v1";
import PageNotFound from "./pages/PageNotFound";
import { RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
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
=======
import SignUp from "./features/account/SignUp";
import Login from "./features/account/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

>>>>>>> 049b57ed68151f61034d428aae9a59ef6f6271b6
export default App;
