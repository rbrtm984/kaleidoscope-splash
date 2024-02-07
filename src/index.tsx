import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";

const basePath = process.env.PUBLIC_URL || "";

// Configure routes using createBrowserRouter
// Define paths and the components to render for each path
const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <App />, // Render App component at root path
  },
]);

// Create a React root attached to the DOM element with id 'root'
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // Render the app within RouterProvider to enable routing
  root.render(<RouterProvider router={router} />);
} else {
  console.error("Element with ID 'root' not found in the document.");
}
