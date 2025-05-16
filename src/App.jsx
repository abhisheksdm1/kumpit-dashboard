import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { ContextProvider } from "./contexts/ContextProvider";
import Error from "./pages/Error";
import ContactVerifier from "./pages/ContactVerifier";
import Credits from "./pages/Credits";
import History from "./pages/History";

// Define routes correctly using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "contact-verifier",
        element: <ContactVerifier />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "credits",
        element: <Credits />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
