import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Single } from "./page/Single";
import { Write } from "./page/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
