import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <AppRoutes />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
