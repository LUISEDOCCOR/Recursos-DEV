//Pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/404";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]) 
  
  return (
   <RouterProvider router={routes} />
  )
}

export default App
