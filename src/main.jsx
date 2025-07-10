import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/input.css";

<<<<<<< HEAD
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

root.render(
=======
createRoot(document.getElementById("root")).render(
>>>>>>> 049b57ed68151f61034d428aae9a59ef6f6271b6
  <StrictMode>
    <App />
  </StrictMode>
);
